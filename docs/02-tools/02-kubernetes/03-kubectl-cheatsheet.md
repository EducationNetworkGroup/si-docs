---
sidebar_position: 1
description: Key CLI commands for Kubernetes.
---

# Kubectl Cheatsheet

This cheatsheet contains frequently used commands for managing Kubernetes resources with `kubectl`.

---

## Cluster Information

### Cluster info
  ```bash
  kubectl cluster-info
  ```

> Nodes are the VMs configured to run k8s; they determine the limits of resources etc

### List nodes
  ```bash
  kubectl get nodes
  ```

---

## Context and Configuration

### List contexts
  ```bash
  kubectl config get-contexts
  ```

### Switch context
  ```bash
  kubectl config use-context <context-name>
  ```

### View current context
  ```bash
  kubectl config current-context
  ```

---

## Pods

> 'Pods' are collections of atleast one container

### List pods
  ```bash
  kubectl get pods
  ```

### List pods in all namespaces
  ```bash
  kubectl get pods --all-namespaces
  ```

### Describe a pod
  ```bash
  kubectl describe pod <pod-name>
  ```

### View pod logs
  ```bash
  kubectl logs <pod-name>
  ```

### Exec into pod
  ```bash
  kubectl exec -it <pod-name> -- /bin/bash
  ```

---

## Common Resources

The common "deployment" resources are: `Deployment`, `Statefulset`, `Replicaset`.

Other common resources are: `Service`, `Ingress`, `PersistentVolume (pv)`, `PersistentVolumeClaim (pvc)` 

### List resources
  ```bash
  kubectl get all
  
  kubectl get <resource_type>
  ```

### Describe deployment
  ```bash
  kubectl describe <resource_type> <resource_name>
  ```

### Scale deployment
  ```bash
  kubectl scale <resource_type> <resource_name> --replicas=3
  ```

---

## Services

### List services
  ```bash
  kubectl get services
  ```

### Describe service
  ```bash
  kubectl describe service <service-name>
  ```

---

## Configuration Management

### Apply configuration
  ```bash
  kubectl apply -f <file.yaml>
  ```

### Delete resource
  ```bash
  kubectl delete -f <file.yaml>
  ```

---

## Resource Information

### Get resource details in YAML format
  ```bash
  kubectl get pod <pod-name> -o yaml
  ```

### Edit resource live
  ```bash
  kubectl edit deployment <deployment-name>
  ```

---

## Troubleshooting

### Check events
  ```bash
  kubectl get events
  ```

### Check resource status
  ```bash
  kubectl get pods -o wide
  ```

### Watch resources in real-time
  ```bash
  kubectl get pods --watch
  ```

---

Keep this cheatsheet handy for quick reference when working with Kubernetes!

