# Software Requirements Specification (SRS)

## 1. Product

MuleShield is a hackathon prototype for real-time fraud and mule-account network detection.

## 2. Objective

Detect suspicious multi-hop money movement while a simulated payment network is expanding, then present an explainable risk decision to an investigator.

## 3. Users

- Fraud investigators
- Financial-institution risk teams
- Hackathon judges / demonstrators

## 4. Functional requirements

### FR-01 Transaction ingestion
Accept normalized transaction events containing sender, receiver, amount, timestamp and transaction metadata.

### FR-02 Graph construction
Represent accounts as nodes and transactions as time-stamped directed edges.

### FR-03 Behavioral analysis
Calculate velocity, fan-in, fan-out, pass-through timing, amount splitting, new-counterparty ratio and related signals.

### FR-04 Risk scoring
Combine configurable rules, behavioral features, ML probability and graph signals into an explainable risk decision.

### FR-05 Investigation
Show the money trail, connected accounts, timeline, risk score and detection reasons.

### FR-06 Payment gate
The website prototype must keep its simulated payment action disabled until a risk check completes.

### FR-07 Contact and consent
Collect only the contact data required by the demo contact workflow and require explicit consent.

## 5. Non-functional requirements

- Responsive web UI
- Accessible keyboard navigation and labels
- Light and dark themes
- No real financial credentials
- Explainable decisions
- Synthetic demo data
- No claim of direct bank/government integration

## 6. Detection model

Conceptual score:

Risk = weighted behavioral score + graph score + ML probability

The weights and thresholds are configurable prototype parameters, not universal banking standards.

## 7. Safety boundary

A high risk score is not proof of criminal activity. Production restrictions or holds must be authorized by the participating institution and applicable procedures.

## 8. Future production work

Kafka streaming, Neo4j graph persistence, model registry, feature store, device/IP relationship analysis, temporal graph ML, authentication, RBAC, audit logging, encryption, monitoring, incident response and regulatory review.
