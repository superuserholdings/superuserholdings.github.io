# Super User Holdings

Super User Holdings is the technology company behind **Supercore OS** — a
purpose-built operating system for AI infrastructure with a hardware-enforced
off switch that no AI workload can disable or reach.

This repository contains the public-facing website. It presents the company,
the product lineup, and the story behind the build — for customers and
investors alike.

## What We Build

### Supercore OS
A purpose-built operating system for AI infrastructure. Runs models, agents,
containers, and VMs on a hardened base — model-agnostic, with the Safeguard
built in, not bolted on.

### AI Hypervisor
Virtualization built for AI workloads: pooled hardware across machines,
GPU-aware placement, and strict isolation between workloads and the management
plane.

### Safeguard
A hardware-enforced dead man's switch. It stays on only while a person says
so — no AI workload can disable it, reach it, or change its mind. Ships inside
every Supercore deployment. Never optional.

**Public-disclosure rule:** this site deploys publicly. The Safeguard is
described only at the level of "hardware-enforced off switch" / "dead man's
switch no AI workload can disable or reach." Implementation details
(architecture, components, protocols) are never published here.

## Company Principles

- Human authority — the off switch answers to people, not software
- Trust is the product — we sell trust, not models
- Evidence over theater — working systems and honest limitations
- Built to continue — clear design, reproducible builds

## Site Structure

- `/` — Supercore OS hero and the trust story
- `/products` — the product lineup with an interactive explorer
- `/company` — the company story, the bet, the regulatory tailwind, investor CTA
- `/start` — contact intake with customer / investor paths
- `/privacy`, `/responsible-publishing` — policy pages

## Customer Intake

The public site includes an intake form on `/start` with customer and investor
paths (`?about=customer`, `?about=investor`). The static site posts only
visitor-provided contact fields to the SuperCore 3.1 public relay:

```text
https://supercore.superuserholdings.com/customer-intake/submissions
```

The relay forwards accepted submissions to the private Mini PC intake service.
Private intake tokens, notification details, infrastructure paths, and mission
evidence are never embedded in this repository or returned to the browser.

Expected public response fields are limited to `ok`, `submission_id`, `status`,
and `duplicate`. Follow-up remains blocked until owner approval.

## Privacy and Demonstration Data

Do not place passwords, API keys, access tokens, recovery codes, banking information, tax information, identity documents, customer records, private network details, or other confidential information in this repository, its issues, or its discussions.

All public demonstrations must use synthetic or placeholder data, including values such as:

```text
[DEMO COMPANY]
[ACCOUNT ALIAS]
[SYNTHETIC BALANCE]
[NODE NAME]
[PRIVATE ENDPOINT]
[REDACTED SECRET]
```
