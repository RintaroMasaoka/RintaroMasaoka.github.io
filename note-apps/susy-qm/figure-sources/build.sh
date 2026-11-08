#!/bin/sh
# TeX/TikZ with pgfsys-dvisvgm driver -> DVI -> glyph-outline SVG.
# Sources specify the driver before TikZ loads; do not use a PDF-only preview as SVG verification.
set -eu
src_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
repo_dir=$(CDPATH= cd -- "$src_dir/../../.." && pwd)
figure_tmp=$(mktemp -d /tmp/susy-figures.XXXXXX)
trap 'rm -rf "$figure_tmp"' EXIT
export TEXINPUTS="$src_dir:${TEXINPUTS:-}"
# An optional name list supports a bounded repair; no arguments regenerates all figures.
if [ "$#" -eq 0 ]; then set -- angular-defect holonomy paired-spectrum morse-saddle; fi
for figure_name in "$@"; do
  figure_layouts="desktop"
  if [ "$figure_name" = holonomy ] || [ "$figure_name" = angular-defect ] || [ "$figure_name" = holonomy-cuts ]; then figure_layouts="desktop mobile"; fi
  for figure_layout in $figure_layouts; do
  for figure_theme in light dark; do
    figure_job="$figure_name"
    figure_prefix=""
    if [ "$figure_layout" = mobile ]; then
      figure_job="$figure_name-mobile"
      figure_prefix='\def\FigureStacked{1}'
    fi
    if [ "$figure_theme" = dark ]; then
      figure_job="$figure_job-dark"
      figure_prefix="$figure_prefix"'\def\FigureDark{1}'
    fi
    latex -interaction=nonstopmode -halt-on-error -jobname="$figure_job" -output-directory="$figure_tmp" "$figure_prefix\input{$src_dir/$figure_name.tex}" > "$figure_tmp/$figure_job-build.log"
    dvisvgm --no-fonts --output="$repo_dir/public/notes/SUSYQM/diagrams/$figure_job.svg" "$figure_tmp/$figure_job.dvi"
  done
  done
done

python3 - "$repo_dir" "$@" <<'PYVERIFY'
from pathlib import Path
import sys
import xml.etree.ElementTree as ET
root=Path(sys.argv[1])/'public/notes/SUSYQM/diagrams'
ns={'s':'http://www.w3.org/2000/svg'}
names=[name+layout+suffix for name in sys.argv[2:] for layout in (('', '-mobile') if name in ('holonomy','angular-defect','holonomy-cuts') else ('',)) for suffix in ('', '-dark')]
for name in names:
    p=root/(name+'.svg'); svg=ET.parse(p).getroot()
    box=list(map(float,svg.attrib['viewBox'].split()))
    # Reserve a six-point margin around dvisvgm's tight geometric bounds.
    import re
    content=p.read_text()
    x,y,w,h=box
    content=re.sub(r"width='[^']+' height='[^']+' viewBox='[^']+'",
                   f"width='{w+12}pt' height='{h+12}pt' viewBox='{x-6} {y-6} {w+12} {h+12}'",content,count=1)
    p.write_text(content)
    box=[x-6,y-6,w+12,h+12]
    assert box[2]>100 and box[3]>100,(name,box)
    groups=svg.findall('./s:g',ns)
    geometry=sum(len(g.findall('.//s:path',ns)) for g in groups)
    glyphs=svg.findall('.//s:use',ns)
    assert geometry>5,(name,'missing geometry')
    assert len(glyphs)>5,(name,'missing glyph outlines')
    print(name, 'viewBox', box, 'geometry paths', geometry, 'glyph uses', len(glyphs))
PYVERIFY
