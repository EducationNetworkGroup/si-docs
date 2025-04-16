---
sidebar_position: 1
description: Introduction to Kubernetes and it's key terminology.
---

# The Basics

Kubernetes or K8s is an open source platform that automates Linux container operations. It eliminates many of the manual processes involved in deploying and scaling containerised applications. In other words, you can cluster together groups of hosts running Linux containers, and Kubernetes helps you easily and efficiently manage those clusters.

## Key Terminology

| Terminology      | Definition      |
| ---------------- | --------------- |
| `Kubectl`        | Command line tool used to communicate with a Kubernetes API server, used to create and manage Kubernetes objects. |
| `Kubelet`        | Part of each node in the cluster, Kubelets make sure containers are actually running in a pod via the Kubernetes API server. They're also responsible for registering a node within a cluster and reporting on resource utilisation. |
| `Kube-control-manager` | Embeds the core control loops shipped with Kubernetes. |
| `Kubernetes API Server` | Provides the frontend to the cluster's shared state, which is where all of the other components interact, and validates and configures data for API objects. |
| `Kube-proxy`    | A network proxy that runs on each node in a cluster, maintaining network rules on nodes, which allows for network communication to the pods.|
| `Kubernetes Scheduler`    | A control-plane component that watches for new pods that need to be placed (scheduled) on nodes. It chooses a suitable node based on resource availability, policies, taints / tolerations, and other constraints. |
| `Namespace`      | A logical partition inside a Kubernetes cluster. Namespaces let you group and isolate resources for different teams, projects, or environments (like dev/test/prod) within the same cluster. |
| `Pod`            | The smallest deployable unit in Kubernetes. A pod represents one or more containers that share the same network IP, storage, and configuration. All containers in a pod are scheduled and run together. |
| `Node`           | A node is a worker machine in Kubernetes - a workload is run by putting containers into pods which run on nodes. A node can be either a virtual or physical machine, depending on the cluster. There are usually several nodes on each cluster, and each node contains the kubelet, kube-proxy and container runtime. |
| `Cluster`        | A group of nodes that run containerised applications. The cluster, and everything within it, is managed with Kubernetes. A cluster is made up of a master node and a set of worker nodes. While the control plane works to maintain the desired state of the cluster, the worker nodes actually run the applications and workloads. |
| `Volume`         | A persistent storage resource that can be attached to a pod. |
| `Etcd`           | An open-source distributed key-value store which stores and manages the configuration data, state data and metadata for Kubernetes. etcd serves as the 'single truth' about the status of the system. |
| `Ingress`        | An API object that manages external HTTP and HTTPS access to services inside the cluster. It defines routing rules (e.g., based on hostnames or paths) and often includes features like SSL termination and load balancing. |
| `Control Plane`  | The management layer that makes global decisions about the cluster, such as scheduling workloads and responding to events-ensuring the cluster operates as intended. |