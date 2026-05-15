# MVP Risk Register

Status: Draft  
Version: MVP-001

| Risk | Impact | Likelihood | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| Overengineering | Slower MVP, harder maintenance | High | Keep stack and scope minimal; require spec traceability | PM / Architect |
| Premature AI | Scope creep and poor recommendations | High | AI stays deferred until enough user context exists | PM |
| Content overload | MVP becomes academy instead of tool | Medium | Knowledge Shelf deferred | PM / Designer |
| Mobile too early | Native complexity before product validation | Medium | Phase 1 is responsive web only | PM / Architect |
| Data loss | Users lose collection trust | Medium | Define persistence and backup expectations before implementation | Architect / QA |
| Timer unreliability | Core ceremony flow fails | Medium | Require deterministic timer testing | Engineer / QA |
| Accessibility gaps | Timer and forms become difficult to use | Medium | Include accessibility requirements and QA scenarios | Designer / QA |
| Scope ambiguity | Agents implement deferred modules | High | Use approval workflow and requirement matrix | PM |
| Underspecified archive behavior | Users lose history or implementation permanently deletes data | Medium | Archive/restore is mandatory; permanent deletion requires future approval | PM / Architect |
| Weak release gates | Release ships without evidence | Medium | Require quality gates, release readiness, and smoke validation | QA / DevOps |
| Private data exposure | Notes or collection data leak through telemetry/export | Low | No external telemetry by default; security review before external flows | Security |
