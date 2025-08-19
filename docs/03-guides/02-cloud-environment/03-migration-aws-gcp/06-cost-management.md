---
sidebar_position: 6
---

# Cost Management

This section describes how we monitor and manage costs in GCP to ensure the migration from AWS remains sustainable.  
The focus is on **VMs, databases, storage, and network egress**, which are the primary drivers of spend for this project.

---

## 💻 Compute (VMs)

- **Machine Types**:  
  - Development → E2 standard VMs (cost-efficient, general purpose).  
  - Production → N2 VMs for better performance when required.  
- **Scaling**: Only one production VM initially; ready for horizontal scale-out if needed.  
- **Discounts**: Eligible for **Sustained Use Discounts** automatically.  
- **Future**: Consider **Committed Use Discounts (CUDs)** if usage stabilises.

---

## 🗄 Database (Cloud SQL)

- **Tiering**: Chosen for balance between performance and cost.  
- **Backups**: Automated daily backups with 7-day retention.  
- **High Availability**: Currently single-zone to minimise cost; HA is optional for critical workloads.  
- **Monitoring**: Alerts configured for high CPU/connection usage to avoid oversizing.

---

## 📦 Storage (Cloud Storage)

- **Buckets**: Standard storage class for frequently accessed objects.  
- **Lifecycle Rules**:  
  - Move old objects to **Nearline** after 30 days.  
  - Consider **Coldline/Archive** for infrequently accessed logs or backups.  
- **Replication**: Regional buckets used to balance resilience and cost.

---

## 🌐 Networking

- **DNS**: Cloud DNS incurs minimal cost per zone/query.  
- **Load Balancing**: Only enabled if multiple replicas of Keycloak are deployed.  
- **Egress**: Monitored carefully — especially if users outside Australia access services.

---

## 💰 Budgets & Alerts

- **Budget Alerts**:  
  - Email alerts when spend > 50%, 80%, and 100% of allocated monthly budget.  
- **Dashboards**: Billing dashboard in Cloud Console shows service-level spend.  
- **Team Awareness**: Alerts routed to Slack/email so cost spikes are caught early.

---

## ✅ Deliverables

- Cost-optimised compute (E2/N2) and Cloud SQL sizing.  
- Storage lifecycle rules to minimise ongoing expense.  
- Budget alerts configured at 50/80/100%.  
- Monitoring in place for VM/DB sizing to prevent overprovisioning.  

---
