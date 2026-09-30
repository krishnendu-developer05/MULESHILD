# MULESHILD

## Real-Time Fraud & Mule Account Network Detection

**MuleShield** is a hackathon prototype for detecting suspicious mule-account networks while money is moving.

Instead of looking at a transaction in isolation, the system models **accounts as graph nodes** and **transactions as time-stamped edges**. Behavioral signals, graph analytics, and machine-learning risk scoring are combined to produce an explainable risk decision.

### Core idea

~~~text
Victim
  ↓
Fraud Account
  ↓
Mule Layer
  ↓
Rapid Fan-out / Pass-through
  ↓
Consolidator
  ↓
Exit
~~~

The prototype focuses on rapid transaction velocity, fan-in/fan-out, amount splitting, rapid pass-through, new-counterparty growth, graph depth and expansion, and exposure to previously suspicious entities.

### Risk-gated payment demo

The website includes a simulated payment flow where the **payment action stays disabled until a risk check is completed**.

This is a demonstration of a risk-control workflow. It does **not** move real money and does not claim that any payment can be made completely risk-free.

Never enter card numbers, UPI PINs, OTPs, passwords, bank credentials, or other sensitive financial information into the demo.

### Founder

**KRISHNENDU ROY**  
**Second Year, CSE**

Krishnendu is the founder and project lead behind the MuleShield concept. His contributions include defining the problem statement, directing the real-time mule-network detection approach, shaping the product and investigator experience, defining the risk-gated payment workflow, and presenting the hackathon solution.

See [CONTRIBUTIONS.md](CONTRIBUTIONS.md) for the project contribution record.

### Prototype technology

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python / FastAPI concept |
| ML | XGBoost / Scikit-learn concept |
| Graph | Neo4j / NetworkX concept |
| Streaming | Apache Kafka concept |
| Database | PostgreSQL |
| Cache | Redis |
| Visualization | D3.js / SVG |
| APIs | REST + WebSocket |
| Deployment | Docker / Hatchable |
| Optional audit layer | Solidity + EVM testnet |

### Architecture

~~~text
Payment Stream
      ↓
Event Gateway
      ↓
Behavioral + Temporal + Graph Features
      ↓
Rules + ML + Graph Analytics
      ↓
Explainable Risk Score
      ↓
Monitor / Verify / Review / Authorized Restriction
      ↓
Investigator Money Trail
~~~

### Important scope

This repository represents a hackathon prototype. It does not claim direct integration with banks, UPI, the National Cybercrime Reporting Portal, the 1930 helpline, crypto exchanges, or government systems.

Real transaction holds or restrictions would require authorization from the participating financial institution and applicable operational and regulatory controls.

### Live prototype

[Open MuleShield](https://muleshield-real.hatchable.site)

### Project design

- Primary palette: #6237A0, #DEACF5, #FFFFFF
- Light and dark modes
- Responsive mobile navigation
- Accessible form consent
- Privacy, terms, refund, and cookie notices
- Expandable digital-payment FAQ
- Founder section
- Risk-gated payment prototype
- Investigator network visualization
- No fake customer claims; illustrative quotes are explicitly marked as fictional

## Hackathon positioning

> **Detect the network while the money is moving.**

The differentiator is the combination of **temporal transaction behavior + graph relationships + explainable risk decisions**, rather than relying only on isolated transaction classification.
