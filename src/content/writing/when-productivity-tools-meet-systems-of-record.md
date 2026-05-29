---
title: "When Productivity Tools Meet Systems of Record"
subtitle: "Speed is a Vanity Metric: Moving from the Illusion of AI Adoption to the Reality of Defensible Architecture."
date: 2026-05-25
kind: "professional"
tags: ["AI implementation", "Third Party Risk", "Architecture", "Regulated environments"]
draft: false
---

*Companies are under pressure to show AI adoption and produce quick returns. For regulated environments, the better question is not AI adoption speed but capital allocation: where should AI investment be made without compromising the compliance deliverables?*

**I keep watching the same conversation play out.**

Risk functions are under pressure, the same way every function in any company is under pressure, and for the same reason. The capital allocation conversation is unavoidable: every dollar spent on humans doing this work is a dollar not invested in the AI that might let those humans do something more valuable. The function is being asked, reasonably, why it has not automated more of its work.

Someone on the team has been using Microsoft Copilot to draft emails and summarize meetings. They have seen how good it is at those things. They propose, reasonably, the next step. *Could we just feed Copilot a vendor's documentation and have it produce the risk assessment? Could we write a really detailed prompt that captures our framework and have the AI apply it?*

The proposal sounds reasonable. The tools are accessible, already licensed, visibly capable on the tasks people have actually seen them do. A small pilot starts. The output looks plausible at first read. But when the team starts validating it, running the same prompts against the same documentation, comparing outputs across different reviewers, the results do not hold up. Accuracy on individual control assessments lands somewhere around four out of five, which in a regulated environment is already a failing grade. On top of that, the failures are not predictable. The same documentation produces different ratings depending on who runs the prompt and when, with both the scoring and the underlying reasoning shifting from run to run. I have not yet seen a single pilot pass the validation stage. The function does not adopt the tool. The pilot is logged as a failed evaluation, and the team goes back to the work it was doing before, except now leadership has the impression that the function tried AI and "it did not work." What actually happened is that the function did its job.

I have watched this pattern play out in the last several months. The specifics vary. The shape is the same.

**The error underneath it is not really about AI. It is about confusing *productivity tools* with *systems of record*.**

A productivity tool helps a person do their work faster. It accelerates drafting, summarization, research, brainstorming, formatting. Its output is reviewed by the person who requested it before being used for anything consequential. If the tool produces something slightly wrong, the person catches it and corrects it. The cost of an error is low because the human is still in the loop, still deciding.

A system of record makes a decision, applies a control, generates an artifact that other systems and other people will rely on. Its output is not casually reviewed; it is trusted. If the output is wrong, the error propagates. Downstream systems consume it. Auditors examine it. Regulators rely on it. The cost of an error is high because the human is not in the loop on every decision. That is the entire point of automation.

These are two fundamentally different categories of tool, and the architectural requirements for each are different. A productivity tool has to be helpful. A system of record has to be auditable, deterministic, repeatable, and defensible. The properties that make a productivity tool good, flexibility, conversational fluidity, creative completion of what the user wants, are the same properties that disqualify it from being a system of record.

When a function asks Microsoft Copilot to autonomously assess a Third Party specific risks, it is taking a productivity tool and asking it to operate as a system of record. The category error is the real problem, not the specific limitations of any specific tool.

**The properties a Third Party Risk Management system of record actually needs are not exotic.** They are well understood from decades of operating risk frameworks in highly regulated environments.

It needs **structured output and validation**. If the framework requires a definitive high, medium, or low rating, the system must produce exactly that, every time, and the output must be checked by something other than the AI itself. Not "this seems like a mild medium." Not "leaning toward high." A consistent, structured rating, validated by a rules engine or schema or second model before it reaches the assessment record.

It needs **citation discipline**. Every rating must be traceable to specific evidence in specific source documents. Not a paraphrase. Not a summary. The exact passage, locatable by an auditor, immutable once recorded.

It needs **state and decomposition**. The system must know what has been assessed, what remains open, what evidence has been gathered. And the work itself must be broken into bounded steps, extract this fact, evaluate this fact against this rule, produce this specific element of the output. State cannot live in a chat history. Cognitive load cannot live in a single prompt.

None of these properties are present in a chat interface where someone types a long prompt. The chat interface is doing what chat interfaces do, taking a request and producing a response that satisfies the request. That is precisely the wrong shape for an autonomous risk decision.

**The fair pushback to all this is: *fine, but what do we do?***

Two things, in order.

**First, be honest about which decisions are which.** 

Not every step of a Third Party risk assessment needs to be a system of record. Drafting an initial summary of a vendor's security posture is a productivity task. Pulling key terms (e.g., RTOs, SLAs, KIs) from a contract is a productivity task. Generating a first-pass narrative for a finished assessment is a productivity task. These are appropriate uses for chat AI, provided a human reviews the output before it becomes consequential. The category error happens when the decision itself, the risk rating / scoring, the control validation, the risk classification, gets handed to the productivity tool.

**Second, when you build toward autonomy, build the architecture, not the prompt.** 

The shift required is from "writing better prompts" to "designing systems that include AI as a component." Inside a Microsoft enterprise environment, as an example, the architecture is roughly as follows. 

1. Vendor documents are ingested and indexed in **Azure AI Search**, which provides the retrieval layer that lets the system find the precise passages relevant to any given control or question. 
2. **Copilot Studio** hosts bounded conversational agents, each one scoped to a specific task with constrained inputs and structured outputs, rather than a single chat interface trying to do everything. 
3. **Power Automate** orchestrates the workflow, calling the agents in sequence, holding state between calls, applying deterministic rules at the gates where AI judgment must not be the sole arbiter. 
4. **Azure AI Foundry** handles the steps where custom prompts and rigid output schemas are required and Copilot Studio's declarative model is too constrained. 
5. **Dataverse** stores the final assessment as a structured artifact, with audit trails, version history, and the field-level integrity that downstream systems and regulators will rely on.

*(Note: This is just one ecosystem example. Outside of Microsoft, there are many excellent tools available to build the exact same technology stack framework.)*

**What this looks like in practice:** when a SOC 2 report arrives, it is ingested into Azure AI Search and chunked by section. Power Automate triggers a Copilot Studio agent specifically scoped to extract control statements from the encryption section. The agent's structured output is validated by a Power Automate decision step against the firm's control taxonomy. If validation fails, the assessment is routed for human review. If it passes, the next agent runs on the next control area, and so on, until the assessment is complete and stored in Dataverse with full traceability to source passages. The AI is doing constrained, supervised work at each step. The orchestration, the state, the validation, the audit trail, all of that is handled by traditional enterprise software wrapped around the AI.

**This is a real architecture.** It is not theoretical. But it requires deliberate investment. Even inside the Microsoft ecosystem, the right tools are not automatically provisioned to every team. Copilot Studio licensing, Azure AI Foundry access, Power Automate premium connectors, Dataverse environments at sufficient scale, all of these require explicit allocation. A risk function asking to build this without those tools is not making the wrong architectural argument. It is being asked to deliver an outcome without the inputs the outcome requires.

**A note on what I am not saying.** 

I am not saying chat AI is useless for risk work, it is genuinely useful for the tasks it is designed for, and I use it daily. I am not saying autonomous AI assessment is impossible, the architectural requirements are well understood, and the Microsoft enterprise stack contains the components needed to build them. The path is not blocked. It is, however, an investment path, not a prompt-engineering path.

The pace of model improvement is real. But the architectural requirements of an auditable risk function have not changed, and they will not be met by a chat box, however eloquently we prompt it.

That is not a limitation of AI. It is a fact about what an autonomous risk decision is, and what it has always required to be defensible. The question for institutions deploying capital in this environment is whether to fund the architecture that lets AI be used safely, or to keep funding pilots that will not survive the first audit.