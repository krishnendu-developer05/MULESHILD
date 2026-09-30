# Hackathon Solution

## Problem

Cyber-fraud syndicates can move stolen funds through multiple intermediary accounts quickly. A transaction may look ordinary in isolation while the surrounding network reveals rapid layering.

## Solution

MuleShield treats payment activity as a temporal graph:

- Account = node
- Transaction = time-stamped edge
- Network behavior = detection signal

The engine combines:

1. Behavioral rules
2. Machine-learning risk scoring
3. Graph analytics
4. Explainable investigation evidence

## Detection signals

- Transactions per minute
- Amount transferred per minute
- Fan-in and fan-out
- Amount splitting
- Pass-through ratio
- Receive-to-forward time
- New-counterparty ratio
- Graph depth
- Graph expansion rate
- Account age
- Connected exposure to suspicious entities

## Example

A simulated ₹50,000 payment flows from a victim to a suspected fraud account, then fans out to several mule accounts, expands into another layer, and approaches an exit account.

The system should surface the pattern before the simulated exit rather than waiting for a batch investigation.

## Response model

Risk decisions are graduated:

- Low: monitor
- Medium: additional verification
- High: review
- Critical: authorized institutional restriction/escalation

A risk score is not proof that an account is fraudulent.

## Demo dashboard

The interface demonstrates:

- Live transaction stream
- Network graph
- Money trail
- Risk score
- Detection reasons
- Transaction timeline
- Risk-gated payment flow
- Founder / project information

## Proposed production stack

React + TypeScript, Python + FastAPI, XGBoost / scikit-learn, Neo4j / NetworkX, Kafka, PostgreSQL, Redis, D3.js, REST/WebSocket, and Docker.

The deployed hackathon prototype is hosted on Hatchable and intentionally uses simulated data rather than real banking information.
