// Blog posts, newest first.
// Body blocks: { type: "p" | "h2" | "h3" | "quote", text },
// { type: "ul" | "ol", items: string[] }, { type: "callout", title, text }.

export const POSTS = [
  {
    slug: "ai-on-legacy-systems",
    title: "What actually breaks when you bolt AI onto a legacy system",
    category: "AI",
    excerpt:
      "The failure modes we see most often aren’t about the model — they’re about the data pipeline feeding it. Here’s what breaks, and what to fix first.",
    date: "2026-10-06",
    author: { name: "SLT AI Practice", role: "AI & ML Engineering" },
    body: [
      {
        type: "p",
        text: "When an AI feature built on top of an older system disappoints, the first instinct is to blame the model. Teams swap providers, rewrite prompts, or reach for a bigger model. In most engagements we see, the model is the part that works. What breaks is everything around it: the records it reads, the permissions it ignores, the integrations it depends on, and the absence of anyone checking whether its output is right.",
      },
      {
        type: "p",
        text: "Legacy systems were built for people who know which fields to trust. A long-serving clerk knows the customer record with the old address is out of date and that the account called “TEST2” isn’t a real customer. A model takes every field at face value. Below are the failure modes we run into most often, and the order in which we fix them.",
      },
      { type: "h2", text: "Stale and duplicated records" },
      {
        type: "p",
        text: "Most long-lived databases carry years of drift: duplicate customers created by different branches, products marked active long after they were discontinued, and free-text fields holding whatever someone decided to type. People route around this with experience. A retrieval pipeline or an agent querying the database can’t, so it quotes the wrong record with complete confidence.",
      },
      {
        type: "p",
        text: "The fix isn’t a company-wide data quality program before anything ships. It’s narrower. Identify the handful of entities the AI feature actually reads, decide which source is authoritative for each, and carry freshness metadata so the system can prefer current records and flag old ones. Deduplication can start with those entities and widen later.",
      },
      { type: "h2", text: "Missing permissions context" },
      {
        type: "p",
        text: "Older systems often enforce access in the application layer — screens a user can’t open, menu items that stay hidden — rather than in the data itself. Copy that data into a search index, or let a model query it through a service account, and those rules disappear. This is the most serious failure we see: an assistant that answers a junior employee’s question with a line from the salary table.",
      },
      {
        type: "p",
        text: "Permissions have to travel with the data. Carry access-control metadata into any index, filter results by the identity of the person asking, and never give the AI a broader account than that person has. Apply the same discipline to actions: if the AI can write back to the system, scope its tools as narrowly as its reads, and treat free text pulled from records as data, never as instructions. If the source system can’t express its permissions cleanly, that is a finding in itself, and it should shape the scope.",
      },
      { type: "h2", text: "Brittle integrations" },
      {
        type: "p",
        text: "Legacy integrations are often nightly batch files, screen scraping, or SOAP endpoints nobody has touched in years. They were tolerable when a person checked the output. Once an AI workflow depends on them, every silent failure becomes a wrong answer delivered fluently. We harden them with a few consistent rules:",
      },
      {
        type: "ul",
        items: [
          "Contracts, not assumptions — define the schema each feed should deliver and validate it on every run.",
          "Fail loudly — if a feed is late or malformed, the feature should say it doesn’t know rather than answer from stale data.",
          "Idempotent writes — if the AI triggers actions in the old system, a retry must never create a duplicate order or ticket.",
          "A thin adapter layer — put a small, well-tested service between the AI and the legacy system, so either side can change without rewriting the other.",
        ],
      },
      { type: "h2", text: "No evaluation set, and no owner" },
      {
        type: "p",
        text: "These two problems usually travel together. Without an evaluation set — real questions or tasks from the workflow, each with an agreed good answer — nobody can tell whether a change to the prompt, the model, or the data made things better or worse. Quality gets judged by whichever example someone tried in the last demo. A hundred or so well-chosen cases is enough to start.",
      },
      {
        type: "p",
        text: "Without a named owner, nobody is accountable when the output is wrong. Someone in the business, not only in engineering, needs to own accuracy for each use case: reviewing failures, deciding what good enough means, and signing off before the scope expands.",
      },
      {
        type: "callout",
        title: "A quick test",
        text: "Ask who would notice if the AI feature started giving wrong answers tomorrow, and how long it would take them. If the honest answer is “a customer, eventually,” fix that before anything else.",
      },
      { type: "h2", text: "What to fix first" },
      {
        type: "p",
        text: "We sequence the work so each step makes the next one measurable:",
      },
      {
        type: "ol",
        items: [
          "Name an owner and build the evaluation set — real examples, with expected outputs agreed by the people who do the work today.",
          "Lock down permissions — confirm the AI can only see and do what the person asking can, and test it with deliberately restricted accounts.",
          "Fix the data the feature reads — authoritative sources, deduplication, and freshness, for those entities only.",
          "Harden the integrations — schema checks, alerts on late or malformed feeds, and idempotent writes.",
          "Then tune the model and prompts — with the evaluation set telling you whether each change actually helped.",
        ],
      },
      {
        type: "p",
        text: "Very little of this is AI work, and none of it is glamorous. It is the difference between a pilot that impresses in a demo and a system people trust on an ordinary Tuesday. That’s how we approach AI on existing systems at SLT Info Tech: fix the foundations first, then improve the model against a test everyone can see.",
      },
    ],
  },
  {
    slug: "cloud-migration-checklist",
    title: "A practical checklist for cloud migrations that don’t slip",
    category: "Engineering",
    excerpt:
      "The migrations that stay on schedule share a handful of decisions made in week one. Here’s the checklist we work from, and why each item is on it.",
    date: "2026-09-15",
    author: { name: "SLT Cloud Team", role: "Cloud & Infrastructure" },
    body: [
      {
        type: "p",
        text: "Cloud migrations rarely slip because of the cloud. They slip because a dependency nobody mapped surfaces halfway through, a database turns out to be larger and busier than anyone thought, or the cutover weekend arrives without a rehearsal. On a typical migration, the problems that cause delays were knowable in week one. Someone just had to go and look.",
      },
      {
        type: "p",
        text: "The migrations that stay on schedule share a handful of early decisions. Here is how we approach each one, followed by the checklist we work from.",
      },
      { type: "h2", text: "Know what you’re moving" },
      {
        type: "p",
        text: "Start with an inventory that goes beyond a server list: every application, the data stores behind it, its scheduled jobs, the certificates and secrets it depends on, and a named owner. Then map dependencies — what calls what, over which ports, and how often. Network flow logs and application traces are better sources than architecture diagrams, which describe the system as it was designed rather than as it runs.",
      },
      {
        type: "p",
        text: "The inventory is also where the surprises live: the reporting server nobody admits to owning, the file drop a partner still uses, the IP address hard-coded into an old config file.",
      },
      {
        type: "quote",
        text: "Finding a forgotten dependency in week one is cheap. Finding it during cutover is not.",
      },
      { type: "h2", text: "Choose a strategy per workload" },
      {
        type: "p",
        text: "One strategy for the whole estate is usually a mistake. Each workload gets its own decision, recorded with the reason behind it:",
      },
      {
        type: "ul",
        items: [
          "Rehost — move it largely as-is when the application is stable, the deadline is real, and changing it buys little.",
          "Replatform — make targeted changes, such as moving to a managed database or a container platform, when they remove real operational work.",
          "Refactor — redesign it when the application is under active development and its current architecture is what’s holding it back.",
          "Retire — switch it off when usage data shows nobody needs it. It’s the cheapest migration there is, and every inventory turns up candidates.",
        ],
      },
      {
        type: "p",
        text: "Two other answers are legitimate. Retain covers workloads that should stay where they are for now, and saying so explicitly beats letting them drift to the end of the plan. Repurchase covers systems better replaced by a SaaS product than moved at all.",
      },
      { type: "h2", text: "Build the foundation first" },
      {
        type: "p",
        text: "The landing zone — account or subscription structure, network topology, identity, policy guardrails, centralized logging, and baseline security controls — should exist before the first workload moves, and it should be defined as infrastructure as code. Terraform, OpenTofu, or the provider’s native tooling all work. What matters is that environments are reproducible and every change is reviewed like application code. Done this way, the twentieth workload moves faster than the first.",
      },
      {
        type: "p",
        text: "Cost guardrails belong in the foundation too: enforced tagging so every resource has an owner, budgets and alerts per environment, and a rule that nothing ships without them. So does observability. Capture baselines for latency, error rates, and throughput in the current environment before cutover, or you won’t be able to tell whether the migration worked — only whether anyone has complained yet.",
      },
      { type: "h2", text: "Rehearse the cutover, and plan the way back" },
      {
        type: "p",
        text: "Data is usually the long pole. Large databases need replication or change data capture, so the final cutover moves minutes of changes rather than the whole dataset. Rehearse the full cutover at least once in a production-like environment, time each step, and write down what went wrong. A runbook that comes out of a rehearsal is far more reliable than one written in advance.",
      },
      {
        type: "p",
        text: "Every cutover also needs a rollback plan with a clear decision point: which signals mean you go back, who makes that call, and how long reversing takes. If reverse replication isn’t possible, that constraint should shape the cutover window rather than be discovered during it.",
      },
      { type: "h2", text: "The checklist" },
      {
        type: "p",
        text: "Before any production workload moves, every item below should be true:",
      },
      {
        type: "ul",
        items: [
          "Inventory complete — applications, data stores, scheduled jobs, certificates, and secrets, each with a named owner.",
          "Dependencies mapped — from observed traffic, not only from diagrams.",
          "Strategy recorded per workload — rehost, replatform, refactor, retire, retain, or repurchase, with the reason written down.",
          "Landing zone in code — networking, identity, policies, and logging deployed through infrastructure as code and peer-reviewed.",
          "Cost guardrails live — tagging enforced, with budgets and alerts set for every environment.",
          "Observability ready — baselines captured in the current environment, and matching dashboards built for the new one.",
          "Data migration validated — replication running, with row counts and checksums compared between source and target.",
          "Cutover rehearsed — end to end at least once, with timings recorded and the runbook updated.",
          "Rollback defined — trigger criteria, a named decision-maker, and a tested procedure.",
          "Communications planned — who hears what and when, and where users report problems during the cutover window.",
        ],
      },
      {
        type: "p",
        text: "None of these items is novel, and that is the point. Migrations slip when the obvious work gets deferred because it feels like overhead. On the migrations we run at SLT Info Tech, this list is settled in the first few weeks, and the infrastructure code, runbooks, and access all stay with the client when we’re done.",
      },
    ],
  },
  {
    slug: "fixed-price-two-week-increments",
    title: "Why we scope fixed-price projects in two-week increments",
    category: "Product",
    excerpt:
      "Smaller increments catch scope drift before it becomes a budget conversation. Here’s how we define them, handle change requests, and show progress.",
    date: "2026-08-20",
    author: { name: "SLT Delivery Team", role: "Product & Delivery" },
    body: [
      {
        type: "p",
        text: "Fixed-price software projects have a reputation problem, and much of it is earned. A vendor estimates six months of work up front, prices in a large buffer, and spends the back half of the project arguing about what was “in scope.” The client pays for the buffer either way, and the relationship sours just when it matters most.",
      },
      {
        type: "p",
        text: "We still prefer fixed pricing, because clients need to know what they are committing to. What we changed is the unit. We scope and price work in increments of about two weeks, each tied to an outcome you can see working. Here is how that works, and why we think it is fairer to both sides.",
      },
      { type: "h2", text: "What an increment is" },
      {
        type: "p",
        text: "An increment isn’t a time box filled with whatever got done. It is a defined piece of working software with two parts:",
      },
      {
        type: "ul",
        items: [
          "A demoable outcome — something a user can do at the end that they couldn’t do at the start, such as “a dispatcher can reassign a job from the map view.”",
          "Acceptance criteria — the specific conditions that make it done, written in plain language and agreed before work begins, including the edge cases that matter.",
        ],
      },
      {
        type: "p",
        text: "If we can’t describe an increment that way, it isn’t ready to price. That is useful in itself: vague requirements surface during planning, when they are cheap to resolve, rather than halfway through delivery.",
      },
      {
        type: "p",
        text: "Each increment has its own fixed price, agreed before it starts. A project is a sequence of increments. We forecast the whole sequence up front so you can budget, but you commit in small steps.",
      },
      { type: "h2", text: "How change requests work" },
      {
        type: "p",
        text: "Requirements change, and they should. The first few increments usually teach everyone something about what the system really needs to do. The question is how change gets absorbed.",
      },
      {
        type: "p",
        text: "Because increments are short, most changes simply go into planning for the next one. If a change affects the increment already underway, we say so, explain the effect on its scope or price, and you decide whether to swap something out, add an increment, or defer the change. Nothing changes the price without a written agreement, and nothing gets built on a hallway “while you’re in there.”",
      },
      {
        type: "p",
        text: "The result is that scope drift becomes visible within days. A change that would have quietly inflated a six-month estimate shows up instead as a concrete trade-off you can make on the spot.",
      },
      { type: "h2", text: "What you see every two weeks" },
      {
        type: "p",
        text: "At the end of each increment, you get the same four things:",
      },
      {
        type: "ul",
        items: [
          "A live demo — on a real environment, not slides, walking through the acceptance criteria one by one.",
          "The code — committed to your own repository throughout, so the work is yours whether or not we continue.",
          "A short written summary — what was accepted, what changed, open risks, and the plan for the next increment.",
          "An updated forecast — how the remaining increments look in light of what we’ve learned.",
        ],
      },
      {
        type: "p",
        text: "You accept the increment when it meets its criteria — that acceptance is the milestone we bill against. If something falls short, we fix it before it’s accepted.",
      },
      {
        type: "callout",
        title: "Stopping is always an option",
        text: "Because the code lives in your repository and each increment stands on its own, you can pause or end the engagement between increments without losing what has been built.",
      },
      { type: "h2", text: "Why it’s fairer than hourly billing" },
      {
        type: "p",
        text: "Hourly billing looks flexible, but it puts all the estimation risk on the client. If the work takes longer, you pay more, and the vendor has no financial reason to find a faster path. Large fixed-price contracts flip the risk the other way, which is why they carry contingencies the client pays for regardless.",
      },
      {
        type: "p",
        text: "Short fixed-price increments put each risk with the party that controls it. We carry the risk of our own estimates, and because each increment is small, we don’t need to pad it heavily. You carry the risk of changing your mind, but you see the cost of each change before you commit to it. Both sides learn quickly whether the estimates are any good.",
      },
      {
        type: "p",
        text: "There are trade-offs. Writing acceptance criteria takes real time from your team, especially early on. Some work, such as a technical investigation, doesn’t produce a demoable feature. For that, we agree on a time-boxed investigation whose deliverable is a written finding, and we say so up front.",
      },
      {
        type: "p",
        text: "Two weeks isn’t a magic number; some increments run a little shorter or longer depending on the work. What matters is that the unit of commitment stays small enough that nobody is surprised for long. That is how we run fixed-price work at SLT Info Tech: small, priced steps, each tied to something you can see working.",
      },
    ],
  },
  {
    slug: "rag-without-the-hype",
    title: "Retrieval-augmented generation, without the hype",
    category: "AI",
    excerpt:
      "A grounded look at when RAG is the right tool and when it’s overkill, plus what it takes to build one people can trust.",
    date: "2026-07-14",
    author: { name: "SLT AI Practice", role: "AI & ML Engineering" },
    body: [
      {
        type: "p",
        text: "Retrieval-augmented generation is a simple idea. Before a language model answers, fetch the most relevant passages from your own content and give them to the model as context. Done well, it lets a model answer questions about material it was never trained on, with sources you can check. Done badly, it is an expensive way to get confident answers from the wrong paragraph.",
      },
      {
        type: "p",
        text: "Most RAG systems we’re asked to review don’t have a model problem. They have a retrieval problem, an evaluation problem, or a problem that never needed RAG in the first place. Here is how we decide, and what we focus on when RAG is the right call.",
      },
      { type: "h2", text: "When something simpler is better" },
      {
        type: "p",
        text: "Before building a pipeline, check whether a simpler tool does the job:",
      },
      {
        type: "ul",
        items: [
          "Plain search — if people need to find a document rather than get a synthesized answer, a well-tuned search index with good filters is cheaper, faster, and easier to trust.",
          "Long context — if the relevant material is a handful of documents that fit comfortably in the model’s context window, passing them in whole can beat retrieval, and prompt caching keeps repeated use affordable.",
          "Fine-tuning — if the goal is a consistent format, tone, or classification behavior, fine-tuning or a few well-chosen examples will serve you better. Fine-tuning teaches behavior; it is a poor way to teach facts that change.",
          "A rules engine — if answers must be deterministic and auditable, as with eligibility or pricing, encode the rules. A model can help people navigate them, but it shouldn’t be the source of truth.",
        ],
      },
      {
        type: "p",
        text: "RAG earns its place when the knowledge is large, changes often, needs citing, and sits behind access controls: internal policies, product documentation, case histories, contracts.",
      },
      { type: "h2", text: "Retrieval is most of the work" },
      {
        type: "p",
        text: "A RAG system can’t give a better answer than the passages it retrieves, and three areas decide what those are.",
      },
      { type: "h3", text: "Chunking and metadata" },
      {
        type: "p",
        text: "Split documents along their natural structure — sections, headings, clauses — rather than at fixed character counts that cut tables and sentences in half. Keep each chunk’s context with it: document title, section path, date, version, and owner. That metadata is what lets you filter to current versions, favor authoritative sources, and show useful citations.",
      },
      { type: "h3", text: "Permissions" },
      {
        type: "p",
        text: "Enforce access control at retrieval time, using the identity of the person asking. If someone can’t open a document in the source system, its chunks must never reach the model on their behalf. Filtering after generation is too late, and a shared index without permission metadata is a data leak waiting to happen.",
      },
      { type: "h3", text: "Hybrid retrieval and re-ranking" },
      {
        type: "p",
        text: "Vector search is good at meaning and weak on exact terms; keyword search such as BM25 is the reverse. Part numbers, error codes, clause references, and names are exactly where pure semantic search fails. Hybrid retrieval runs both and merges the results, often with reciprocal rank fusion, and a re-ranking model then reorders the top candidates before they reach the language model. In most systems we review, this does more for answer quality than switching to a larger model.",
      },
      { type: "h2", text: "Measure retrieval and answers separately" },
      {
        type: "p",
        text: "A RAG system can fail in two different places, and you need to know which. Build an evaluation set of real questions, each paired with an agreed answer and the passages that support it, then measure:",
      },
      {
        type: "ul",
        items: [
          "Retrieval quality — did the right passages appear in the top results? Metrics such as recall@k tell you whether the model ever had a chance.",
          "Faithfulness — is every claim in the answer supported by the retrieved passages, or did the model fill gaps from its training data?",
          "Usefulness — did the answer address the question, and did it say so when the sources didn’t cover it?",
        ],
      },
      {
        type: "p",
        text: "Model-graded evaluation makes it practical to run these checks on every change, but calibrate the grader against human review of a sample first. Rerun the suite whenever chunking, prompts, or models change, and quality debates stop being about anecdotes.",
      },
      {
        type: "callout",
        title: "Before you build anything",
        text: "Write down twenty real questions your users ask and the documents that answer them. If your own team can’t agree on the answers, no retrieval pipeline will fix that.",
      },
      { type: "h2", text: "Citations, cost, and latency" },
      {
        type: "p",
        text: "Citations aren’t decoration. Every answer should point to the specific passages it relied on, linked to the source, so users can verify it and reviewers can trace failures back to a cause. An answer without sources should be treated as unverified.",
      },
      {
        type: "p",
        text: "Every component also has a price. Query rewriting, hybrid search, re-ranking, larger contexts, and agentic retrieval — where the model runs several searches and refines its own queries — each add latency and cost. A few seconds may be fine for an internal research assistant and unacceptable in a customer-facing search box. We start with the simplest pipeline that could work, measure it against the evaluation set, and add components only when they improve the results that matter. Caching frequent queries and routing simple ones to smaller models keeps costs predictable as usage grows.",
      },
      {
        type: "p",
        text: "RAG is a useful pattern, not a strategy. Used where it fits, with careful retrieval, enforced permissions, and an evaluation set that keeps everyone honest, it produces systems people can rely on. When we build one at SLT Info Tech, we start from the questions and the documents, not from the vector database.",
      },
    ],
  },
  {
    slug: "zero-trust-is-not-a-product",
    title: "Zero trust isn’t a product you buy",
    category: "Engineering",
    excerpt:
      "Notes from rolling out identity-first access control across a mid-size organization’s stack — what we did first, and what made it stick.",
    date: "2026-06-02",
    author: { name: "SLT Security Team", role: "Cybersecurity" },
    body: [
      {
        type: "p",
        text: "Zero trust is often sold as something you can buy: a gateway, an agent, a platform. In practice it is an operating model. Every request is authenticated and authorized based on who is asking, from which device, and for which resource, and being on the corporate network earns nothing by itself. NIST’s zero trust architecture guidance, SP 800-207, describes it as a set of guiding principles rather than a single architecture. Tools help enforce those principles. They can’t decide them for you.",
      },
      {
        type: "p",
        text: "These notes come from rolling out identity-first access control across a mid-size organization’s stack: the usual mix of SaaS applications, internally hosted systems, cloud workloads, and more shared admin accounts than anyone had on their list. The order below is the one we would use again.",
      },
      { type: "h2", text: "Identity is the perimeter" },
      {
        type: "p",
        text: "Start with one identity provider that every application authenticates against through single sign-on, using SAML or OIDC. Any app that keeps its own local passwords is a gap: it bypasses MFA, it survives offboarding, and nobody reviews who has access. Building the inventory of applications and how each one authenticates is unglamorous work, and it is where the real scope of the project becomes visible.",
      },
      {
        type: "p",
        text: "Then comes MFA, and the type matters. SMS codes and push approvals are better than nothing, but both can be phished, and push prompts can be spammed until someone taps approve. Wherever possible, move people to phishing-resistant methods — passkeys, or hardware security keys for the most privileged accounts — starting with administrators and anyone with access to finance or production systems.",
      },
      { type: "h2", text: "Devices, privileges, and segments" },
      {
        type: "p",
        text: "A verified identity on a compromised laptop is still a problem. Device posture — managed, encrypted, patched, with endpoint protection running — becomes a condition of access to sensitive applications, enforced through the identity provider’s conditional access policies. Beyond devices, we tighten what each identity can reach:",
      },
      {
        type: "ul",
        items: [
          "Least privilege — standing access is reviewed and cut back to what each role actually uses, starting with admin rights.",
          "Just-in-time access — elevated permissions are requested for a specific task, approved, time-limited, and logged, rather than held permanently.",
          "No shared accounts — every action should trace back to a person. Where a shared credential truly can’t be avoided, it lives in a vault with checkout and rotation.",
          "Segmentation — internal applications sit behind an identity-aware proxy instead of being reachable from the whole network, so getting onto the network no longer means reaching everything on it.",
        ],
      },
      { type: "h2", text: "Logging that someone reads" },
      {
        type: "p",
        text: "Every access decision should be logged: sign-ins, policy outcomes, privilege elevations, posture failures. Centralize those logs, keep them long enough to investigate an incident properly, and alert on a short list of high-signal events, such as MFA method changes, new admin grants, sign-ins from unexpected locations, and logging being switched off.",
      },
      {
        type: "quote",
        text: "A dashboard nobody watches is not a control.",
      },
      { type: "h2", text: "A phased rollout order" },
      {
        type: "p",
        text: "Big-bang rollouts fail because every exception lands on the help desk at once. We phase the work so each step builds on the last:",
      },
      {
        type: "ol",
        items: [
          "Inventory — applications, identities, admin accounts, and how each app authenticates today.",
          "SSO and phishing-resistant MFA for administrators — the smallest group with the largest blast radius.",
          "SSO and MFA for everyone — app by app, switching off legacy authentication protocols as each one moves.",
          "Device posture — in report-only mode first, so you can see who would be blocked before anyone is.",
          "Least privilege and just-in-time access — beginning with cloud and production admin roles.",
          "Segmentation — moving internal applications behind identity-aware access, one at a time.",
        ],
      },
      { type: "h2", text: "The change management that makes it stick" },
      {
        type: "p",
        text: "The technical controls are the easier half. What makes zero trust last is how people experience it. Explain what is changing and why before it changes. Run every new policy in report-only mode and fix the false positives before enforcing it. Give the help desk a script and a fast path for exceptions, and make sure every exception has an owner and an expiry date. Above all, make the secure path the easy one: single sign-on and passkeys are faster than typing passwords, and once people notice that, resistance drops.",
      },
      {
        type: "p",
        text: "Zero trust is never finished. New applications, roles, and devices arrive every month, and the model has to absorb them. The goal is that every access decision is explicit, logged, and owned. Our security engagements at SLT Info Tech follow the same pattern: identity first, phased deliberately, with policies your own team can run after we step back.",
      },
    ],
  },
  {
    slug: "how-we-run-discovery-calls",
    title: "How we run discovery calls before any code gets written",
    category: "Product",
    excerpt:
      "The questions that separate a real scope from a guess dressed up as a proposal, and how one call becomes a written scope you can hold us to.",
    date: "2026-04-21",
    author: { name: "SLT Delivery Team", role: "Product & Delivery" },
    body: [
      {
        type: "p",
        text: "Many troubled projects are visible in the first conversation. A proposal arrives the day after a single short call, priced to the dollar, describing a system nobody has examined. It reads as confidence. Usually it is a guess, and the gaps come back later as change requests.",
      },
      {
        type: "p",
        text: "Our discovery calls are designed to prevent that. They are working sessions, ideally with the person who owns the problem and someone who does the work day to day, and they cover the same ground every time.",
      },
      { type: "h2", text: "The questions we ask" },
      { type: "h3", text: "Who does the system serve?" },
      {
        type: "p",
        text: "Not “users” in general, but specific roles: a warehouse supervisor, a claims handler, a customer on their phone late at night. We want to know how many of them there are, how often they use the system, and what they are trying to get done when they do.",
      },
      { type: "h3", text: "What slows them down today?" },
      {
        type: "p",
        text: "We ask someone to walk us through a real task from the past week, step by step. Where they retype data, wait on another team, export to a spreadsheet, or work around the system tells us more than any feature list.",
      },
      { type: "h3", text: "What tools and data already exist?" },
      {
        type: "p",
        text: "The current systems, who owns them, how data moves between them, and whether they offer APIs or only exports. Integrations are where estimates most often go wrong, so we ask about them early and in detail.",
      },
      { type: "h3", text: "What are the constraints?" },
      {
        type: "p",
        text: "Compliance obligations such as HIPAA, SOC 2, or data residency rules; the budget range; hard deadlines and what drives them; and who needs to approve the work. A deadline set by a regulator is a different conversation from one set by a trade show.",
      },
      { type: "h3", text: "What does success look like?" },
      {
        type: "p",
        text: "Something observable: a process that takes a day instead of a week, a report that no longer needs manual reconciliation, a support queue that shrinks. If nobody can describe success, the project isn’t ready to scope yet, and that is worth knowing too.",
      },
      { type: "h2", text: "What we listen for" },
      {
        type: "p",
        text: "The answers matter, but so do the gaps. A few patterns always get our attention:",
      },
      {
        type: "ul",
        items: [
          "Conflicting descriptions — two people describe the same process differently, which usually means the process isn’t settled.",
          "A missing decision-maker — the person who approves scope and budget hasn’t been part of the conversation.",
          "Features without problems — a feature list, often borrowed from another product, with no link to what slows people down.",
          "Deadlines without reasons — a date with nothing behind it, which tends to slide or harden at the worst moment.",
        ],
      },
      {
        type: "p",
        text: "None of these disqualifies a project. Each one becomes an explicit item in the scope instead of a surprise later.",
      },
      { type: "h2", text: "From call to written scope" },
      {
        type: "p",
        text: "After the call, we send a written scope. It restates the problem in our words so you can check we understood it, lists the users and workflows in scope and those explicitly out of it, names the systems we will integrate with, and records assumptions and open questions. The work is broken into increments of about two weeks, each with a demoable outcome, acceptance criteria, and a fixed price.",
      },
      {
        type: "p",
        text: "Where we don’t know enough to estimate honestly, such as an undocumented integration, we say so and propose a short, fixed-price investigation to find out, rather than padding the estimate to cover the unknown. We then walk through the document together, and you mark up anything we got wrong. Once agreed, it becomes the reference point for every increment that follows.",
      },
      {
        type: "callout",
        title: "What to bring to the call",
        text: "A recent example of the task you want to improve, the names of the systems involved, any hard dates, and the person who will make the final decision. That is usually enough for a productive first conversation.",
      },
      { type: "h2", text: "When it isn’t a fit" },
      {
        type: "p",
        text: "Sometimes the right outcome of a discovery call is no project, or not one with us. An off-the-shelf product might solve the problem better, the budget and the scope might be too far apart, or the work might need a specialist we don’t have. When that happens, we say so directly, and where we can, we tell you what we would do in your position. That costs us some work in the short term. It saves both sides from a project that was never going to land.",
      },
      {
        type: "p",
        text: "A good discovery call should leave you with a clearer view of the problem, whether or not you hire us. Every engagement at SLT Info Tech starts this way: questions first, then a written scope you can hold us to, and a straight answer if we aren’t the right team.",
      },
    ],
  },
];

// Read time is derived from the text so it stays accurate when posts are edited.
const WORDS_PER_MINUTE = 200;
for (const post of POSTS) {
  const text = post.body.flatMap((b) => [b.title, b.text, ...(b.items || [])]).filter(Boolean).join(" ");
  post.readTime = `${Math.max(1, Math.ceil(text.split(/\s+/).length / WORDS_PER_MINUTE))} min read`;
}

// Formats an ISO date (YYYY-MM-DD) without time-zone drift.
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
