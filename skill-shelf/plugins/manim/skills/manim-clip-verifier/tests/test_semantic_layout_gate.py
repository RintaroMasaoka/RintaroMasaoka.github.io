import pathlib
import sys
import tempfile
import unittest

SCRIPTS = pathlib.Path(__file__).resolve().parents[1] / "scripts"
sys.path.insert(0, str(SCRIPTS))

from review_preflight import (
    Finding,
    lint_source,
    validate_numeric_dispositions,
    validate_reference_contracts,
)


class SemanticLayoutGateTests(unittest.TestCase):
    def lint(
        self,
        source: str,
        relative: str = "scene.py",
        registry_ids=None,
        asset_registered: bool = True,
        resolved_reference: bool = False,
    ):
        with tempfile.TemporaryDirectory() as directory:
            path = pathlib.Path(directory) / relative
            path.parent.mkdir(parents=True, exist_ok=True)
            if "paper_assets" in path.parts and asset_registered:
                asset_index = path.parts.index("paper_assets")
                registry_path = pathlib.Path(*path.parts[: asset_index + 1]) / "asset_registry.yaml"
                module = ".".join(path.parts[asset_index:-1])
                registry_path.write_text(
                    "schema_version: 1\nassets:\n"
                    f"  - asset_id: test-asset\n    module: {module}\n    status: active\n"
                    "    parameters:\n"
                    "      - {name: source_figure_scale}\n"
                    "      - {name: cell_length}\n",
                    encoding="utf-8",
                )
            if registry_ids is not None:
                entries = sorted(registry_ids)
                if resolved_reference:
                    identity = entries[0]
                    contract = {
                        "reference_system_id": identity,
                        "contract_revision": "rev-1",
                        "view_instance_id": "main-panel",
                        "coordinate_domain": "R2 model coordinates",
                        "owner": "plot_axes",
                        "owner_native_components": ["axes", "ticks"],
                        "external_semantic_dependents": ["data"],
                        "conversion_api": "plot_axes.c2p",
                        "allowed_post_transforms": ["whole-view layout"],
                        "checks": ["data point coincidence"],
                    }
                    (path.parent / "work_order.json").write_text(
                        __import__("json").dumps({"reference_system_contracts": [contract]}),
                        encoding="utf-8",
                    )
                    entries = [{
                        "reference_system_id": identity,
                        "canonical_path": "work_order.json",
                        "contract_revision": "rev-1",
                    }]
                (path.parent / ".manim-reference-systems.json").write_text(
                    __import__("json").dumps({"reference_systems": entries}),
                    encoding="utf-8",
                )
            path.write_text(source, encoding="utf-8")
            return lint_source(path)

    def test_unregistered_builder_marker_has_no_authority(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=contact offset; role=model; owner=fitted coordinates; domain=singleton render; coordinate_system=canvas; origin=visual fit; affects_relations=tangency\n"
            "contact_offset = 0.3\n",
            relative="paper_assets/fake/builder.py",
            asset_registered=False,
        )
        codes = {finding.code for finding in findings}
        self.assertIn("numeric-parameter-outside-asset", codes)
        self.assertIn("bare-numeric-literal", codes)

    def test_numeric_consumer_scale_is_reported(self):
        findings = self.lint("def build(mob):\n    mob.scale(1.1)\n")
        codes = {finding.code for finding in findings}
        self.assertIn("numeric-consumer-size", codes)
        self.assertIn("bare-numeric-literal", codes)
        by_code = {finding.code: finding.severity for finding in findings}
        self.assertEqual(by_code["numeric-consumer-size"], "error")
        self.assertEqual(by_code["bare-numeric-literal"], "warning")

    def test_generic_model_number_is_a_review_lead_not_a_verdict(self):
        findings = self.lint("def model(radius):\n    return 2 * radius\n")
        bare = [finding for finding in findings if finding.code == "bare-numeric-literal"]
        self.assertEqual(len(bare), 1)
        self.assertEqual(bare[0].severity, "warning")

    def test_numeric_warning_requires_reviewed_disposition(self):
        finding = Finding("warning", "bare-numeric-literal", "scene.py", 2, "classify")
        with tempfile.TemporaryDirectory() as directory:
            path = pathlib.Path(directory) / "numeric_dispositions.json"
            path.write_text('{"schema_version": 1, "reviewer_id": "reviewer", "implementer_id": "implementer", "artifact_revision": "rev-1", "entries": []}', encoding="utf-8")
            result = validate_numeric_dispositions([finding], path)
        self.assertIn("unresolved-numeric-warning", {item.code for item in result})

    def test_non_tuning_numeric_disposition_resolves_warning(self):
        finding = Finding("warning", "bare-numeric-literal", "scene.py", 2, "classify")
        with tempfile.TemporaryDirectory() as directory:
            path = pathlib.Path(directory) / "numeric_dispositions.json"
            path.write_text(
                '{"schema_version": 1, "reviewer_id": "reviewer", "implementer_id": "implementer", "artifact_revision": "rev-1", "entries": [{"path": "scene.py", "line": 2, "code": "bare-numeric-literal", "classification": "model", "basis": "source equation", "owner": "torus embedding", "relation_effect": "changes radii; preserves membership"}]}',
                encoding="utf-8",
            )
            result = validate_numeric_dispositions([finding], path)
        self.assertEqual(result, [])

    def test_documented_asset_parameter_can_drive_geometry(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=source figure magnification; role=source; owner=source figure transform; domain=positive real; coordinate_system=source figure units; origin=source normalization; affects_relations=none\n"
            "source_figure_scale = 1.1\n"
            "def build(mob):\n"
            "    mob.scale(source_figure_scale)\n",
            relative="paper_assets/figure/builder.py",
        )
        codes = {finding.code for finding in findings}
        self.assertNotIn("numeric-consumer-size", codes)
        self.assertNotIn("bare-numeric-literal", codes)
        self.assertEqual(codes, set())

    def test_numeric_subobject_index_is_reported(self):
        findings = self.lint("def build(group):\n    return group[4]\n")
        self.assertIn("bare-numeric-literal", {finding.code for finding in findings})

    def test_documented_asset_parameter_is_accepted(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=nearest-neighbor spacing; role=model; owner=lattice embedding; domain=positive real; coordinate_system=lattice units; origin=normalized model; affects_relations=incidence\n"
            "cell_length = 1.0\n"
            "def build():\n"
            "    return cell_length\n",
            relative="paper_assets/lattice/builder.py",
        )
        self.assertNotIn("bare-numeric-literal", {finding.code for finding in findings})

    def test_asset_builder_cannot_hide_a_literal_in_geometry(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=nearest-neighbor spacing; role=model; owner=lattice embedding; domain=positive real; coordinate_system=lattice units; origin=normalized model; affects_relations=incidence\n"
            "cell_length = 1.0\n"
            "def build(circle):\n"
            "    return circle.shift(0.5 * cell_length)\n",
            relative="paper_assets/lattice/builder.py",
        )
        self.assertIn("bare-numeric-literal", {finding.code for finding in findings})

    def test_incomplete_parameter_metadata_is_rejected(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=nearest-neighbor spacing\n"
            "cell_length = 1.0\n",
            relative="paper_assets/lattice/builder.py",
        )
        codes = {finding.code for finding in findings}
        self.assertIn("incomplete-semantic-parameter", codes)
        self.assertIn("bare-numeric-literal", codes)

    def test_parameter_declaration_does_not_turn_a_paper_asset_scene_into_a_builder(self):
        findings = self.lint(
            "# manim-parameter: meaning=source figure magnification; role=source; owner=source figure transform; domain=positive real; coordinate_system=source figure units; origin=source normalization; affects_relations=none\n"
            "source_figure_scale = 1.1\n"
            "def construct(mob):\n"
            "    mob.scale(source_figure_scale)\n",
            relative="paper_assets/figure/scene_preview.py",
        )
        codes = {finding.code for finding in findings}
        self.assertIn("numeric-parameter-outside-asset", codes)
        self.assertIn("bare-numeric-literal", codes)
        self.assertIn("numeric-consumer-size", codes)

    def test_preview_cannot_self_declare_builder_authority(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=source figure magnification; role=source; owner=source figure transform; domain=positive real; coordinate_system=source figure units; origin=source normalization; affects_relations=none\n"
            "source_figure_scale = 1.1\n"
            "def construct(mob):\n"
            "    mob.scale(source_figure_scale)\n",
            relative="paper_assets/figure/scene_preview.py",
        )
        codes = {finding.code for finding in findings}
        self.assertIn("numeric-parameter-outside-asset", codes)
        self.assertIn("numeric-consumer-size", codes)

    def test_parameter_missing_owner_domain_and_relation_effect_is_rejected(self):
        findings = self.lint(
            "# manim-asset-builder\n"
            "# manim-parameter: meaning=source figure magnification; coordinate_system=source figure units; origin=source normalization\n"
            "source_figure_scale = 1.1\n",
            relative="paper_assets/figure/builder.py",
        )
        incomplete = [finding for finding in findings if finding.code == "incomplete-semantic-parameter"]
        self.assertEqual(len(incomplete), 1)
        self.assertIn("owner", incomplete[0].message)
        self.assertIn("domain", incomplete[0].message)
        self.assertIn("affects_relations", incomplete[0].message)

    def test_numeric_string_conversion_is_reported(self):
        findings = self.lint("def build():\n    return float('1.1')\n")
        self.assertIn("encoded-numeric-literal", {finding.code for finding in findings})

    def test_inline_asset_builder_marker_does_not_enable_asset_exemption(self):
        findings = self.lint(
            "source_figure_scale = 1.1  # manim-asset-builder\n"
            "def build(mob):\n"
            "    mob.scale(source_figure_scale)\n",
            relative="paper_assets/figure/builder.py",
        )
        codes = {finding.code for finding in findings}
        self.assertIn("bare-numeric-literal", codes)
        self.assertIn("numeric-consumer-size", codes)

    def test_tex_strings_do_not_count_as_numeric_literals(self):
        findings = self.lint("def build():\n    return MathTex(r'x^2 + 1')\n")
        self.assertNotIn("bare-numeric-literal", {finding.code for finding in findings})

    def test_numeric_font_size_is_reported(self):
        findings = self.lint("def build():\n    return Text('title', font_size=42)\n")
        self.assertIn("numeric-consumer-font-size", {finding.code for finding in findings})

    def test_vague_exception_is_rejected(self):
        findings = self.lint(
            "def build(mob):\n"
            "    # manim-layout: allow-size looked better\n"
            "    mob.scale(1.1)\n"
        )
        self.assertIn("invalid-layout-exception", {finding.code for finding in findings})

    def test_reference_system_index_does_not_authorize_layout_exception(self):
        findings = self.lint(
            "def build(mob):\n"
            "    # manim-layout: allow-absolute reference-system=plot-view source coordinate placement\n"
            "    mob.move_to([1, 2, 0])\n",
            registry_ids={"plot-view"},
        )
        matching = [finding for finding in findings if finding.code == "invalid-layout-exception"]
        self.assertEqual(len(matching), 1)
        self.assertEqual(matching[0].severity, "error")

    def test_canonical_reference_contract_resolves_layout_exception(self):
        findings = self.lint(
            "def build(mob):\n"
            "    # manim-layout: allow-absolute reference-system=plot-view source coordinate placement\n"
            "    mob.move_to([1, 2, 0])\n",
            registry_ids={"plot-view"},
            resolved_reference=True,
        )
        matching = [
            finding for finding in findings
            if finding.code == "resolved-reference-system-contract"
        ]
        self.assertEqual(len(matching), 1)
        self.assertEqual(matching[0].severity, "info")

    def test_parameterized_equal_unit_axes_have_runtime_assertion_route(self):
        findings = self.lint(
            "def build(x_range, y_range, width, height):\n"
            "    # manim-review: runtime-unit-aspect assert_equal_unit_scale(chart)\n"
            "    return Axes(x_range=x_range, y_range=y_range, x_length=width, y_length=height)\n"
        )
        matching = [finding for finding in findings if finding.code == "runtime-unit-aspect-review"]
        self.assertEqual(len(matching), 1)
        self.assertNotIn("unverifiable-graph-unit-aspect", {finding.code for finding in findings})

    def test_two_views_of_one_domain_are_valid(self):
        with tempfile.TemporaryDirectory() as directory:
            path = pathlib.Path(directory) / "work_order.json"
            base = {
                "contract_revision": "rev-1",
                "coordinate_domain": "complex upper half-plane",
                "owner_native_components": ["axes", "ticks"],
                "external_semantic_dependents": ["grid", "curve"],
                "conversion_api": "chart.c2p",
                "allowed_post_transforms": ["whole-view layout"],
                "checks": ["sample coincidence", "unit aspect"],
            }
            path.write_text(__import__("json").dumps({"reference_system_contracts": [
                {**base, "reference_system_id": "overview", "view_instance_id": "overview-panel", "owner": "overview_chart"},
                {**base, "reference_system_id": "inset", "view_instance_id": "inset-panel", "owner": "inset_chart"},
            ]}), encoding="utf-8")
            findings = validate_reference_contracts(path)
        self.assertEqual(findings, [])

    def test_incomplete_or_duplicate_view_contract_is_rejected(self):
        with tempfile.TemporaryDirectory() as directory:
            path = pathlib.Path(directory) / "work_order.json"
            complete = {
                "reference_system_id": "overview",
                "contract_revision": "rev-1",
                "view_instance_id": "main-panel",
                "coordinate_domain": "R2",
                "owner": "chart",
                "owner_native_components": ["axes"],
                "external_semantic_dependents": [],
                "conversion_api": "",
                "allowed_post_transforms": [],
                "checks": ["origin coincidence"],
            }
            path.write_text(__import__("json").dumps({"reference_system_contracts": [
                complete,
                {**complete, "reference_system_id": "second"},
                {"reference_system_id": "broken"},
            ]}), encoding="utf-8")
            findings = validate_reference_contracts(path)
        codes = {finding.code for finding in findings}
        self.assertIn("duplicate-reference-view-owner", codes)
        self.assertIn("incomplete-reference-contract", codes)

    def test_numeric_spacing_is_rejected(self):
        findings = self.lint("def build(group):\n    group.arrange(buff=1.7)\n")
        self.assertIn("numeric-consumer-style", {finding.code for finding in findings})

    def test_numeric_timing_is_rejected(self):
        findings = self.lint("def build(self, mob):\n    self.play(mob, run_time=0.8)\n    self.wait(1.5)\n")
        self.assertEqual(sum(finding.code == "numeric-consumer-timing" for finding in findings), 2)

    def test_directory_name_does_not_disable_gate(self):
        findings = self.lint("def build(mob):\n    mob.scale(1.2)\n", relative="fake/manim_layout/scene.py")
        self.assertIn("numeric-consumer-size", {finding.code for finding in findings})

    def test_raw_manim_color_import_is_rejected(self):
        findings = self.lint("from manim import BLUE\ndef build():\n    pass\n")
        self.assertIn("raw-semantic-color-import", {finding.code for finding in findings})

    def test_hidden_geometry_values_are_not_a_bypass(self):
        findings = self.lint(
            "def build(mob, factor, spacing):\n"
            "    mob.scale(factor)\n"
            "    mob.next_to(mob, buff=spacing)\n"
            "    return Rectangle(width=factor, stroke_width=spacing)\n"
        )
        codes = {finding.code for finding in findings}
        self.assertIn("numeric-consumer-size", codes)
        self.assertIn("numeric-consumer-style", codes)

    def test_layout_region_constructor_is_runtime_owned(self):
        findings = self.lint("def build(width, height, center):\n    return LayoutRegion(width, height, center)\n")
        self.assertIn("numeric-consumer-style", {finding.code for finding in findings})

    def test_positional_primitive_and_animation_timing_are_rejected(self):
        findings = self.lint(
            "def build(value):\n"
            "    circle = Circle(value)\n"
            "    return FadeIn(circle, run_time=value)\n"
        )
        codes = {finding.code for finding in findings}
        self.assertIn("raw-primitive-constructor", codes)
        self.assertIn("numeric-consumer-timing", codes)

    def test_indirect_and_qualified_colors_are_rejected(self):
        findings = self.lint(
            "import manim\n"
            "def build(mob, chosen):\n"
            "    mob.set_color(chosen)\n"
            "    return mob.set_fill(color=manim.BLUE)\n"
        )
        self.assertIn("raw-semantic-color", {finding.code for finding in findings})

    def test_primitive_alias_and_variable_font_size_are_rejected(self):
        findings = self.lint(
            "from manim import Circle as C\n"
            "def build(size):\n"
            "    return C(font_size=size)\n"
        )
        codes = {finding.code for finding in findings}
        self.assertIn("raw-primitive-constructor", codes)
        self.assertIn("numeric-consumer-font-size", codes)


if __name__ == "__main__":
    unittest.main()
