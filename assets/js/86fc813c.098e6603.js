"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[863],{2922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tools/kubernetes/the-basics","title":"The Basics","description":"Kubernetes or K8s is an open source platform that automates Linux container operations. It eliminates many of the manual processes involved in deploying and scaling containerised applications. In other words, you can cluster together groups of hosts running Linux containers, and Kubernetes helps you easily and efficiently manage those clusters.","source":"@site/docs/02-tools/02-kubernetes/01-the-basics.md","sourceDirName":"02-tools/02-kubernetes","slug":"/tools/kubernetes/the-basics","permalink":"/si-docs/tools/kubernetes/the-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/02-kubernetes/01-the-basics.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Kubernetes (k8s)","permalink":"/si-docs/category/kubernetes-k8s"},"next":{"title":"How to Install","permalink":"/si-docs/tools/kubernetes/how-to-install"}}');var r=n(4848),o=n(8453);const i={sidebar_position:1},a="The Basics",d={},c=[{value:"Key Terminology",id:"key-terminology",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"the-basics",children:"The Basics"})}),"\n",(0,r.jsx)(t.p,{children:"Kubernetes or K8s is an open source platform that automates Linux container operations. It eliminates many of the manual processes involved in deploying and scaling containerised applications. In other words, you can cluster together groups of hosts running Linux containers, and Kubernetes helps you easily and efficiently manage those clusters."}),"\n",(0,r.jsx)(t.h2,{id:"key-terminology",children:"Key Terminology"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Terminology"}),(0,r.jsx)(t.th,{children:"Definition"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Kubectl"})}),(0,r.jsx)(t.td,{children:"Command line tool used to communicate with a Kubernetes API server, used to create and manage Kubernetes objects."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Kubelet"})}),(0,r.jsx)(t.td,{children:"Part of each node in the cluster, Kubelets make sure containers are actually running in a pod via the Kubernetes API server. They're also responsible for registering a node within a cluster and reporting on resource utilisation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Kube-control-manager"})}),(0,r.jsx)(t.td,{children:"Embeds the core control loops shipped with Kubernetes."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Kubernetes API Server"})}),(0,r.jsx)(t.td,{children:"Provides the frontend to the cluster's shared state, which is where all of the other components interact, and validates and configures data for API objects."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Kube-proxy"})}),(0,r.jsx)(t.td,{children:"A network proxy that runs on each node in a cluster, maintaining network rules on nodes, which allows for network communication to the pods."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Kubernetes Scheduler"})}),(0,r.jsx)(t.td,{children:"A control-plane component that watches for new pods that need to be placed (scheduled) on nodes. It chooses a suitable node based on resource availability, policies, taints / tolerations, and other constraints."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Namespace"})}),(0,r.jsx)(t.td,{children:"A logical partition inside a Kubernetes cluster. Namespaces let you group and isolate resources for different teams, projects, or environments (like dev/test/prod) within the same cluster."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Pod"})}),(0,r.jsx)(t.td,{children:"The smallest deployable unit in Kubernetes. A pod represents one or more containers that share the same network IP, storage, and configuration. All containers in a pod are scheduled and run together."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Node"})}),(0,r.jsx)(t.td,{children:"A node is a worker machine in Kubernetes - a workload is run by putting containers into pods which run on nodes. A node can be either a virtual or physical machine, depending on the cluster. There are usually several nodes on each cluster, and each node contains the kubelet, kube-proxy and container runtime."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Cluster"})}),(0,r.jsx)(t.td,{children:"A group of nodes that run containerised applications. The cluster, and everything within it, is managed with Kubernetes. A cluster is made up of a master node and a set of worker nodes. While the control plane works to maintain the desired state of the cluster, the worker nodes actually run the applications and workloads."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Volume"})}),(0,r.jsx)(t.td,{children:"A persistent storage resource that can be attached to a pod."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Etcd"})}),(0,r.jsx)(t.td,{children:"An open-source distributed key-value store which stores and manages the configuration data, state data and metadata for Kubernetes. etcd serves as the 'single truth' about the status of the system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Ingress"})}),(0,r.jsx)(t.td,{children:"An API object that manages external HTTP and HTTPS access to services inside the cluster. It defines routing rules (e.g., based on hostnames or paths) and often includes features like SSL termination and load balancing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Control Plane"})}),(0,r.jsx)(t.td,{children:"The management layer that makes global decisions about the cluster, such as scheduling workloads and responding to events-ensuring the cluster operates as intended."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);