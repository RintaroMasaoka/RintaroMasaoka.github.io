# /auto-research Schemas

## focus.md

    # Focus
    cursor: research/{path}/
    status: active | session_complete | blocked

    ## Context
    {current scientific board}

    ## Direction Challenge Response
    {accepted, rejected, or held challenge}

    ## Next Session
    ### Lead Work
    - Question: {this cycle's highest-information question}
      Method: {direct reading, derivation, computation, synthesis}
      Success criteria: {observable decision change}

    ### Pre-Worker Tree Directives
    - {optional routing transaction}

    ### Worker Dispatches
    - Agent: {role}
      Task: {bounded task}
      Target: {existing node or literature scope}
      Inputs: {paths}
      Deliverable: {worker transaction or artifact}
      Success criteria: {observable checks}
      Run number / slug: {when required}
      Delegation reason: {specialization | effective parallelism | independent verification | semantic transaction}
      Downstream decision: {what this result can change}
      Direct-work insufficiency: {why the lead cannot obtain this with comparable confidence or cost}
      Claim consequence: exploratory | check | durable

    ### Tree Directives
    - {curator transaction}

    ### Naming Decisions
    - {name contract entry}

    ## Blockers
    - {owner and missing condition}

cursorは一cycleで高々一edge移動する。Lead Workは必須。Worker DispatchesはDelegation Gateを通るtaskがなければ空でよい。worker target、deliverable、success criteria、delegation reason、downstream decision、direct-work insufficiencyはagentが推測しなくてよい粒度で書く。Claim consequenceはreview dispatchを自動化せず、leadが独立reviewのinformation valueを判断する。

## Curator dispatch

    ## Task
    {ordinary absorption | pre-worker readiness | presentation | session-end}

    ## Tree Directives
    {focus entries}

    ## Naming Decisions
    {focus/worker entries}

    ## New Evidence This Cycle
    {worker.md, critic.md, final verdict}

    ## Durable Surface Reviews
    {returned review paths or none}

    ## Context
    Cursor: {path}
    Cycle: {n}
    Pre-worker readiness: true|false
    Presentation boundary: true|false
    Session-end sweep: true|false

## Session packet

    ## Focus
    {next focus.md body}

    ## Last Session
    {handoff}

    ## Research Draft
    {this session's integrated result, evidence scope, negative evidence, and verification debt}

    ## Session Log
    ### Accomplished
    ### Node Changes
    ### Deliverables

    ## Backlog
    ### research/{node}/backlog.md
    - {item}

    ## Agenda
    - {meeting item}


## Return tokens

- agent success: DONE: {path or concise summary}
- agent failure: FAILED: {reason}
- curator readiness: Dispatch readiness: valid | invalidated
- critic provisional: ACCEPT | REJECT | REVISE-NONBLOCKING | REVISE-BLOCKING | OPAQUE
- critic durable: ACCEPT | REVISE | REJECT
