# Data Models

## Account

Suggested fields:

- account_id
- institution_id
- account_age
- status
- created_at

## Transaction

Suggested fields:

- transaction_id
- sender_account_id
- receiver_account_id
- amount
- currency
- timestamp
- channel
- device_id_hash
- ip_hash
- risk_score
- decision

## RiskAlert

Suggested fields:

- alert_id
- transaction_id
- risk_score
- severity
- reasons
- created_at
- case_status

These are the proposed detection-engine models. The currently deployed contact database model is defined in `migrations/001_contact.sql`.
