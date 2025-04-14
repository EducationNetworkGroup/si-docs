"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[3190],{8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var r=s(6540);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}},9097:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"tools/helm/the-basics","title":"The Basics","description":"Helm is a package manager for Kubernetes that helps you define, install, and manage applications. Helm charts are packages of pre-configured Kubernetes resources that allow for easy deployment and scaling of applications. Charts are reusable and customizable, making it easier to manage Kubernetes applications.","source":"@site/docs/02-tools/04-helm/01-the-basics.md","sourceDirName":"02-tools/04-helm","slug":"/tools/helm/the-basics","permalink":"/si-docs/tools/helm/the-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/04-helm/01-the-basics.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Helm","permalink":"/si-docs/category/helm"},"next":{"title":"Chart.yaml File Structure","permalink":"/si-docs/tools/helm/chart-file-structure"}}');var n=s(4848),i=s(8453);const l={sidebar_position:1},d="The Basics",a={},c=[{value:"Helm Chart Structure",id:"helm-chart-structure",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"the-basics",children:"The Basics"})}),"\n",(0,n.jsx)(t.p,{children:"Helm is a package manager for Kubernetes that helps you define, install, and manage applications. Helm charts are packages of pre-configured Kubernetes resources that allow for easy deployment and scaling of applications. Charts are reusable and customizable, making it easier to manage Kubernetes applications."}),"\n",(0,n.jsx)(t.p,{children:"A Helm chart consists of templates, configuration values, and metadata that define Kubernetes resources like deployments, services, and ingress. When you deploy a chart, Helm takes these templates and renders them into Kubernetes manifests by substituting values from the values.yaml file (or from the command line). Helm then sends the final rendered manifests to the Kubernetes API server for deployment."}),"\n",(0,n.jsx)(t.h2,{id:"helm-chart-structure",children:"Helm Chart Structure"}),"\n",(0,n.jsxs)(t.p,{children:["Helm Charts consist of a structured set of files and directories that work together to define, configure, and deploy Kubernetes applications. Below is the typical structure of a ",(0,n.jsx)(t.code,{children:"Helm Chart"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"\u2514\u2500\u2500 helm\n    \u251c\u2500\u2500 LICENSE\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 .helmignore\n    \u251c\u2500\u2500 Chart.yaml\n    \u251c\u2500\u2500 values.yaml\n    \u251c\u2500\u2500 charts\n    \u2514\u2500\u2500 templates\n        \u251c\u2500\u2500 NOTES.txt\n        \u251c\u2500\u2500 _helpers.tpl\n        \u251c\u2500\u2500 deployment.yaml\n        \u251c\u2500\u2500 hpa.yaml\n        \u251c\u2500\u2500 ingress.yaml\n        \u251c\u2500\u2500 service.yaml\n        \u251c\u2500\u2500 serviceaccount.yaml\n        \u2514\u2500\u2500 tests\n"})}),"\n",(0,n.jsx)(t.p,{children:"Let's take a quick look at what everything does."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"File / Folder"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"LICENSE"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Includes open source license."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"README.md"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Can include notes / basic information about the Helm Chart here."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:".helmignore"})}),(0,n.jsx)(t.td,{children:"Recommended"}),(0,n.jsx)(t.td,{children:"Defines patterns to ignore when building packages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Chart.yaml"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Contains the meta data for the chart."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"values.yaml"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Contains the default configuration values that the templates refer to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"charts folder"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Holds subcharts or chart dependencies."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates folder"})}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"This is the heart of the Helm Chart where you include the Kubernetes resources templates. The templates included here, combined with the default values in values.yaml, are what inform the Kubernetes manifest file. This folder must contain at least one valid file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/NOTES.txt"})}),(0,n.jsx)(t.td,{children:"Optional"}),(0,n.jsx)(t.td,{children:"This is an optional file which provides information about our helm chart , This file is rendered same as regular template file by helm , after notes.txt is rendered its not sent to k8s cluster , but output is displayed in CLI window."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/_helpers.yaml"})}),(0,n.jsx)(t.td,{children:"Optional"}),(0,n.jsx)(t.td,{children:"Defines help functions / macros for the templates to use."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/deployment.yaml"})}),(0,n.jsx)(t.td,{children:"Recommended"}),(0,n.jsx)(t.td,{children:"Describes how to deploy the application."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/hpa.yaml"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Defines HorizontalPodAutoscaler resources if for auto-scaling, if required."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/ingress.yaml"})}),(0,n.jsx)(t.td,{children:"Optional"}),(0,n.jsx)(t.td,{children:"Defines ingress rules to expose services outside the cluster. Needed only if external access is required."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/service.yaml"})}),(0,n.jsx)(t.td,{children:"Recommended"}),(0,n.jsx)(t.td,{children:"Exposes pods via a Kubernetes Service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/serviceaccount.yaml"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"If required, defines the service account that the app should run as."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"templates/tests folder"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Contains Helm test hooks to verify that the chart works."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);