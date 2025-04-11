---
sidebar_position: 99
---

# Kubernetes Temp

> This document assumes an understanding of [Docker](../03-docker/01-the-basics.md). Please start there first if you are new to containerization.

---

## What is Kubernetes?

*"Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation."* Okay... but what does that actually mean? This document intends to answer that question by providing an overview of Kubernetes, how it fits into a system architecture, and some basics commands for working with it.

### Key Terminology

[Kubernetes Official Docs](https://kubernetes.io/docs/concepts/overview/) tells us that *Kubernetes* is the Greek word for *Helmsman* or *Pilot*. [Google Cloud](https://cloud.google.com/learn/what-is-kubernetes) translates it as *Captain*. The key idea is that, just as a captain is responsible for safely navigating a ship through the seas, Kubernetes ensures that containers are delivered reliably to the environments where they’re needed. It’s a poetic analogy—and it's also our first clue that we might not be able to immediately infer meaning from most of the terminology we are about to encounter. That's where our terminology table comes in.

| Terminology      | Definition      |
| ---------------- | --------------- |
| `K8s`            | An abbreviation of `Kubernetes'. Pronounced "Kates". |
| `kubectl`        | Is the commandline tool used to interact with a Kubernetes cluster. Pronounced "cube control". |
| `kube-proxy`     | A networking component that runs on each node. It manages network communication for services and forwards traffic to the correct pods, handling things like load balancing and routing inside the cluster. |
| `kubelet`        | An agent that runs on every node. It communicates with the Kubernetes control plane and ensures that the containers defined in your Pod specs are running and healthy on that node. |
| `node`           | A worker machine in Kubernetes, which can be a physical server or a virtual machine. Each node runs pods and contains the services needed to manage them, like kubelet, kube-proxy, and a container runtime (e.g., Docker). |
| `pod`            | The smallest deployable unit in Kubernetes. A pod represents one or more containers that share the same network IP, storage, and configuration. All containers in a pod are scheduled and run together. |
| `cluster`        | A group of nodes managed by Kubernetes. It includes at least one control plane (which makes decisions) and multiple worker nodes (which run your applications). |
| `Namespace`      | A logical partition inside a Kubernetes cluster. Namespaces let you group and isolate resources for different teams, projects, or environments (like dev/test/prod) within the same cluster. |
| `Volume`         | A persistent storage resource that can be attached to a pod. |
| `Etcd`           | A key-value store used as Kubernetes’ backing database. It stores all configuration data, including the current state of the cluster, node and pod metadata, and secrets. |
| `Kubernetes Scheduler`    | A control-plane component that watches for new pods that need to be placed (scheduled) on nodes. It chooses a suitable node based on resource availability, policies, taints / tolerations, and other constraints. |
| `Ingress`        | An API object that manages external HTTP and HTTPS access to services inside the cluster. It defines routing rules (e.g., based on hostnames or paths) and often includes features like SSL termination and load balancing. |
| `Control Plane`  | The management layer that makes global decisions about the cluster, such as scheduling workloads and responding to events-ensuring the cluster operates as intended. |

> A [Full Glossary](https://kubernetes.io/docs/reference/glossary/?all=true) of terms is provided in the Official Kubernetes Docs.

---

