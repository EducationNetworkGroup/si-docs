---
sidebar_position: 3
---

# Cost Management

## Estimated Monthly Cost

| Resource | Approximate Cost / Month |
|---------|--------------------------|
| Compute Engine VM (e2-standard-2) | ~**$51** |
| Persistent SSD Disk (50 GB) | ~**$5** |
| Reserved External IP | ~**$3** |
| Cloud DNS | $0 (within free tier) |
| Let’s Encrypt TLS | $0 |

**Estimated total ongoing cost:** ~**$60 USD/month**

> This estimate is based on the current deployment: a single VM hosting all services, reserved IP, and storage.
> If usage grows or redundancy is required, costs may increase.

---

## Billing & Funding Note

The platform is currently hosted under the project `science-island-465603`.  
Billing account `010D8F-4134A8-A7538A` is enabled, however detailed spend breakdowns are restricted to users with **Billing Account Viewer** role.

---

## Cost Optimisation Opportunities

- Use **preemptible instances** or smaller machine types if traffic remains low.  
- Evaluate **turning off non-production services** when not in use (e.g., during off-hours) to reduce compute cost.  
- Monitor usage of **persistent disks** and delete old unused volumes.  
- When scale demand increases, consider **Cloud Run / GKE autoscaling** to optimise cost/performance.
