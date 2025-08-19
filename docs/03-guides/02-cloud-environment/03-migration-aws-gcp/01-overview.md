---
sidebar_position: 1
---

# AWS → GCP Migration Overview

This section provides the background and high-level context for our migration project from Amazon Web Services (AWS) to Google Cloud Platform (GCP).

---

## 🎯 Purpose of the Migration

We are moving from AWS to GCP to:

- **Simplify infrastructure**: replace complex AWS setups with leaner GCP services (e.g., single VM + Docker Compose for development).  
- **Reduce costs**: take advantage of GCP’s competitive pricing, sustained use discounts, and simplified architecture.  
- **Improve observability**: consolidate logging and monitoring using Cloud Logging and Cloud Monitoring.  
- **Enable long-term scalability**: align with Google-native services for future growth.  

---

## 📐 Scope

This migration includes:

- **Compute**: EC2 → Compute Engine (VM for dev/test, optional GKE for future scaling).  
- **Storage**: S3 → Cloud Storage.  
- **Databases**: RDS (Postgres) → Cloud SQL (Postgres).  
- **IAM**: AWS IAM Roles → GCP Service Accounts.  
- **CI/CD**: CodeBuild/CodePipeline → Cloud Build / Cloud Deploy.  
- **Networking**: Route 53 → Cloud DNS.  

---

## 📊 High-Level Architecture

### Before (AWS)
- EC2 instances managed with ALB/NLB  
- RDS for Postgres  
- S3 for object storage 
- IAM roles & secrets in Parameter Store  

### After (GCP)
- Compute Engine VM with Docker Compose for dev/test  
- Cloud SQL (Postgres)  
- Cloud Storage for objects  
- Cloud DNS & Load Balancing  
- Secrets in Secret Manager  

---

## 📅 Timeline

| Phase / Sprint | Focus                                                    | Dates (AEST)              |
|----------------|----------------------------------------------------------|---------------------------|
| **Sprint 4**   | GCP foundations, docs (migration section), staging DNS   | Aug 04 – Aug 24, 2025     |
| **Sprint 5**   | Keycloak deploy via CI/CD, Cloud SQL hookup, TLS/DNS     | Aug 25 – Sep 14, 2025     |
| **Sprint 6**   | App/client OIDC integration, roles, load testing, ops    | Sep 15 – Oct 05, 2025     |
| **Sprint 7**   | Hardening, cost cleanup, final docs & runbook rehearsal  | Oct 06 – Oct 26, 2025     |
| **CAPEX + Handover** | Presentation, sign-off, release & ownership transfer | Oct 27 – Nov 07, 2025     |


---

## ✅ Deliverables

- Service mapping documentation  
- Infrastructure setup (Pulumi, VM, registry, secrets)  
- Data migration runbooks  
- CI/CD pipeline instructions  
- DNS cutover plan + rollback steps  
- Observability setup & dashboards  
- Cost monitoring plan  
- Handover notes for future maintainers  

---