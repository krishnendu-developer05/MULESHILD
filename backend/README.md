# Backend

The deployed Hatchable prototype currently exposes its contact API under `api/contact.js`.

The production architecture proposed for MuleShield uses:

- Python
- FastAPI
- PostgreSQL
- Redis
- Kafka
- Neo4j
- XGBoost / scikit-learn

This directory documents the planned service separation so the prototype can be expanded without mixing UI code and detection services.

## Suggested modules

```
backend/
  routes/
  models/
  services/
  schemas/
  tests/
```

The current working contact endpoint remains in `api/contact.js` because that is the code actually deployed by Hatchable.
