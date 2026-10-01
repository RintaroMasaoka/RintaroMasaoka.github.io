# E. Information selection and communication

Judgment: what to convey and how wording, sequence, emphasis, and amount affect
the reader. Review the artifact using its agreed audience and purpose.

## 16. Leak conversation or instruction language into the artifact

**Failure.** Import wording from requests, critiques, internal plans, or revision
history into the artifact, giving readers material or implications they do not
need.

**Why it can happen.** A language model generates from the supplied context;
vocabulary and phrasing can shape the continuation alongside content. Humans
also imitate language. AI work often places instructions, old drafts, criticism,
and reader-facing prose together, making their different roles easy to blur.

**Examples.** Turn “be more concrete” into a sentence announcing that concreteness
is important; use an internal workflow name as a reader-facing heading; retain
“unlike the old approach” after the rejected approach has become irrelevant.

**Check.** Would a reader who never saw the conversation need this wording or
contrast? Would it appear if the artifact had been written correctly initially?

**Repair and boundary.** Extract the intended content and express it in the
artifact's own vocabulary and structure. Keep historical comparison when it is
the purpose, as in change logs, meeting records, or explanations of misconceptions.

## 17. Treat the writer's knowledge as already supplied

**Failure.** Explain using sources, conversation history, or later conclusions
as if the reader could already use that information at this point.

**Why it can happen.** Writers see a whole argument while readers receive it
incrementally, a structure similar to the human curse of knowledge. AI can draw
on a broad context, so understanding with that context does not establish that
the delivered text supports the same understanding.

**Examples.** Use undefined notation; assume a result explained only later;
deliver instructions that require unshared discussion; skip an inferential step
as “obvious.”

**Check.** Using the agreed background knowledge and only what the reader has
received by that point, can they make the next inference or take the next action?

**Repair and boundary.** Supply the missing definition or bridge where it is
needed. Do not reteach agreed background or add a whole tutorial for one missing
step. Inventing the reader's prior knowledge belongs in 07; this entry concerns
mis-tracking information availability even with the reader premise held fixed.

## 18. Judge the whole message by sentence-level truth

**Failure.** Check each sentence's factual truth while overlooking what placement,
emphasis, and omission imply about importance, causality, necessity, or scope.

**Why it can happen.** Local truth is easier to check than the understanding
created over a sequence of sentences. Human writers face this too. An AI that
fulfills individual requirements in sequence can assemble true fragments that
suggest a relationship the evidence does not support.

**Examples.** Emphasize a testing condition until it looks necessary for validity;
juxtapose facts so that readers infer an unsupported cause; move an exception
until a conditional claim reads as unconditional.

**Check.** What would the position and emphasis lead a reader to consider central,
necessary, causal, or general? What evidence supports that reading?

**Repair and boundary.** Adjust order, relational explanation, and emphasis while
preserving the claim's scope. Keep necessary qualifications. Distinguish predicted
reader impressions from measured reactions. All content may be necessary yet
misleadingly arranged; that is this entry, while disproportionate information
relative to its usefulness belongs in 19.

## 19. Include information beyond its useful role

**Failure.** Include a related fact, or give it excessive space or emphasis,
without comparing its contribution to the requested answer, understanding,
decision, or action.

**Why it can happen.** Associating related facts and selecting useful information
are different operations. Humans add tangents, well-meant supplements, and overly
complete reports too. AI can generate many natural continuations quickly, making
“there is something related to say” an easy substitute for a reason to say it.
The cost to the reader's attention and the effect of removal require a separate
comparison.

**Variants and discriminating tests:**

| Variant | Test |
|---|---|
| Say unnecessary things: roleless supplements, repeated conclusions, unsolicited next steps. | What understanding, decision, or action would be impaired by removing this sentence? Is topical relevance the only reason to retain it? |
| Dwell on trivialities: give low-impact distinctions or cosmetic preferences the same weight as decisive issues. | If this detail changed, how much would the conclusion or choice change? Does that contribution justify its space and prominence? |

**Core check.** Compare each element's concrete role with the attention allocated
to it. With no role, reconsider inclusion; with a small role, reconsider position,
length, and emphasis.

**Repair and boundary.** Remove roleless additions, omit or separate low-priority
detail, and stop when the requested purpose is served. Retain conditions that
prevent misuse, warnings that change action, requested background, and explicitly
requested inventories. Do not optimize for shortness itself. Length alone does
not establish this bias.

## Distinguish output from the chain that produced it

A recent “be more thorough” could displace other constraints (05), turn visible
thoroughness into the success criterion (01), lead to additive editing (11), and
produce roleless information (19). These are different judgments. Observing the
last one does not prove that the earlier causes occurred. Report the supported
failure and use possible explanations to choose a useful next test.
