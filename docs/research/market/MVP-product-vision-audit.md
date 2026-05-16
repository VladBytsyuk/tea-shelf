# MVP Product Vision Audit

Status: Research Audit
Version: MVP-001
Role: Research Specialist
Accessed: 2026-05-16

## Summary

The current Tea Shelf product vision is directionally sound, but its differentiation should be stated more sharply. Public tea apps already combine tea inventory, brew timers, journals, quantity tracking, sync, and sometimes community. Tea Shelf should therefore avoid claiming that the integrated concept is unique.

The strongest MVP positioning is:

- A calm, Chinese tea and gongfu-oriented practice tool.
- Integrated tea, teaware, multi-steep timing, and session memory.
- Local-first, privacy-sensitive workflows for personal collection data.
- A narrow MVP that proves repeat practice before adding AI, sync, content, social, or commerce.

Recommendation: keep MVP scope unchanged and refine product-vision language around focus, ritual quality, and validation of repeat-use behavior.

## Current Vision Assessment

Existing product direction is consistent across the product vision, mission, PRD, personas, roadmap, and market assumptions:

- MVP promise: users can catalog tea and teaware while conducting guided tea sessions.
- Target users: gongfu practitioners, tea collectors, teaware collectors, and beginner Chinese tea enthusiasts.
- Deferred work: Knowledge Shelf, AI assistant, authentication, cloud sync, native mobile, monetization, social, marketplace, and community features.
- Core belief: integrated inventory plus guided brewing is more useful than disconnected notes, spreadsheets, inventory tools, and timers.

Research confidence: Medium. Internal documentation is coherent, and external evidence confirms the problem space exists. User willingness to maintain structured tea and teaware data remains unvalidated.

## Market Evidence

| Product / Source | Relevant Evidence | Implication for Tea Shelf |
|---|---|---|
| MyTeaPal | Positions itself as an all-in-one timer, tracker, journal, and community app. It supports teas, teawares, brew logs, encyclopedia content, quantity tracking, sharing, reminders, sync, and stats. | Tea Shelf should not position "inventory + timer + journal" as novel by itself. |
| Resteeped | Offers tea discovery, personal collection, tasting notes, brew parameters, timers, and a privacy-oriented "zero data collected" message. | Privacy and tea memory are already visible market themes; Tea Shelf must define a more specific ritual/workflow angle. |
| TeaCabinet | Combines tea collection, steep timers, brew parameters, storage tracking, quick brew, auto-subtract stock, and native mobile timer affordances. | Tea Shelf's manual stock update and web-first MVP are simpler but less feature-rich than some alternatives. |
| Teanote | Presents a web-based tea journal and gongfu timer focused on calm sessions, infusion tracking, tea profiles, inventory, and cross-device sync. | Gongfu focus is credible, but Tea Shelf needs to compete on integrated teaware context and local-first simplicity. |
| Reddit tea discussions | Recent tea community discussions show users use timer apps, spreadsheets, physical journals, and personal note systems; some users care about repeated parameters and avoiding over-steeping. | The problem is real, but user habits vary. Validation should test whether users want structured app workflows or prefer lightweight notes. |

## Differentiation Assessment

Strong differentiators to emphasize:

- Teaware is first-class in MVP, not merely an optional note attached to a brew.
- Multi-steep session memory ties tea, teaware, timing, temperature notes, and reflections together.
- The product intentionally protects calm ceremony flow over community, content, commerce, or gamified engagement.
- Local-first/single-user posture aligns with treating collection notes as private user-owned data.

Weak or unproven differentiators:

- "All-in-one tea assistant" is crowded and too broad.
- Privacy alone is not unique because at least one competitor explicitly markets zero data collection.
- A web MVP may be easier to access but lacks native timer affordances such as lock-screen notifications.
- Beginners may need more education than MVP includes, but adding academy content would conflict with current scope guardrails.

## Assumption Validation

| Assumption | Current Status | Risk If Wrong | Validation Step |
|---|---|---|---|
| Users value integrated tea, teaware, and session context more than separate tools. | Plausible, unproven | MVP may feel like extra data entry instead of reducing friction. | Interview 8-12 target users about current tracking, timer, and teaware-selection workflows. |
| Gongfu practitioners need multi-steep session memory. | Supported by product category evidence | Timer may be used once but history may not drive retention. | Prototype a repeat-session flow and test whether users reuse prior parameters. |
| Local-first privacy is a meaningful benefit. | Plausible but not unique | Users may prefer sync, backup, and mobile notifications over local data control. | Ask users to rank privacy/local control against sync and notifications. |
| Manual stock update is acceptable for MVP. | Scope-aligned, less competitive | Users may expect automatic deduction after brewing. | Usability-test post-session stock update and measure completion/drop-off. |
| Beginners can succeed without education content. | Product assumption | Beginner users may churn before reaching first useful session. | Test first-use flow with beginner participants and measure first-session completion. |

## Recommended Vision Refinements

Keep the product mission and MVP promise, but adjust the positioning language:

- Replace broad claims like "personal tea ceremony assistant" when used alone with a more specific phrase: "a calm, personal practice tool for Chinese tea inventory, teaware context, and repeatable multi-steep sessions."
- Clarify that the MVP is not trying to out-feature mature tea apps. It is proving a focused workflow: choose from what you own, brew with appropriate context, and remember what worked.
- Treat local-first privacy as a product principle, not the only market differentiator.
- Add a validation note to the vision package: the riskiest assumption is not whether tea apps exist, but whether users will maintain structured tea and teaware records often enough for session history to become valuable.

No MVP feature additions are recommended from this audit.

## Risks

| Risk | Impact | Likelihood | Mitigation |
|---|---|---|---|
| Competitive parity risk | Medium | High | Position around calm, focused Chinese tea practice and teaware-aware session memory instead of generic app breadth. |
| Data-entry friction | High | Medium | Keep required fields minimal and validate first-use flows before expanding fields. |
| Native timer expectation | Medium | Medium | Make web timer states clear in MVP; defer lock-screen, push, widgets, and native mobile per roadmap. |
| Privacy-versus-sync tradeoff | Medium | Medium | Preserve local-first MVP, then validate whether Phase 2 sync should include explicit backup/privacy controls. |
| Beginner support gap | Medium | Medium | Use clear labels and empty states in MVP; validate whether Knowledge Shelf should move earlier after MVP evidence. |

## Next Steps

- Product Manager: refine product vision wording using the positioning recommendations above.
- Research Specialist: run target-user interviews focused on current tracking habits, structured data tolerance, privacy versus sync, and repeat-session value.
- UI/UX Designer: prototype first-use and repeat-session flows that minimize data-entry friction.
- QA Engineer: keep scope-control validation in MVP acceptance checks so competitor pressure does not pull deferred features into MVP.

## Sources

Internal references:

- `docs/product/vision/product-vision.md`
- `docs/product/vision/mission.md`
- `docs/product/vision/value-proposition.md`
- `docs/product/roadmap/roadmap-overview.md`
- `docs/product/personas/primary-users.md`
- `docs/product/user-journeys/MVP-pain-point-analysis.md`
- `docs/spec/product-requirements/active/PRD-MVP-001-tea-shelf.md`
- `docs/research/market/MVP-market-assumptions.md`

External references accessed 2026-05-16:

- MyTeaPal on Google Play: https://play.google.com/store/apps/details?hl=en-US&id=com.myteapal.myteapal
- Resteeped: https://www.resteeped.com/
- TeaCabinet: https://teacabi.net/
- Teanote: https://teanote.xyz/
- Reddit r/tea discussion on tracking brewing: https://www.reddit.com/r/tea/comments/1s7se8n/do_you_actually_track_your_tea_brewing_or_just_do/
