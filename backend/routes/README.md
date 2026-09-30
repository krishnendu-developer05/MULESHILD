# Routes

## Current deployed route

### POST /api/contact

Accepts:

- name
- email
- message
- consent

Validates the fields and writes an approved contact submission to PostgreSQL.

Source of truth for the deployed route:

`api/contact.js`

## Planned API routes

- POST /api/transactions
- POST /api/risk/check
- GET /api/cases/:id
- GET /api/accounts/:id/network
- GET /api/transactions/:id/trail
- WS /api/stream

These planned routes are documented architecture, not claims of currently deployed banking integrations.
