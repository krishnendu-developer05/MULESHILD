# Actual vs planned components

## Implemented in the deployed prototype

- Responsive HTML frontend
- CSS design system
- JavaScript interactions
- Light/dark mode
- Mobile navigation
- Cookie banner
- Legal tabs
- Contact form and consent flow
- PostgreSQL contact-submission migration
- Risk-gated simulated payment flow
- Simulated network visualization
- Founder section
- Hatchable deployment

## Planned architecture, not currently implemented as production services

- Kafka transaction stream
- Neo4j persistence
- XGBoost fraud model
- FastAPI fraud service
- Redis hot state
- Temporal GNN
- Bank/UPI integrations
- Government/1930 integration
- Real transaction holds

Keeping this distinction explicit makes the repository technically honest and easier for judges or future contributors to understand.