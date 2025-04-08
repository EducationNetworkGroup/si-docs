"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[4363],{5169:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"guides/setup-local-environment/science-island-website","title":"Science Island Website","description":"Prerequisites","source":"@site/docs/03-guides/01-setup-local-environment/01-science-island-website.md","sourceDirName":"03-guides/01-setup-local-environment","slug":"/guides/setup-local-environment/science-island-website","permalink":"/si-docs/guides/setup-local-environment/science-island-website","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/03-guides/01-setup-local-environment/01-science-island-website.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Setup Local Environment","permalink":"/si-docs/category/setup-local-environment"},"next":{"title":"The Platform","permalink":"/si-docs/guides/setup-local-environment/the-platform"}}');var t=s(4848),r=s(8453);const c={sidebar_position:1},d="Science Island Website",l={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Local Development Without using XAMPP",id:"local-development-without-using-xampp",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"science-island-website",children:"Science Island Website"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://dev.mysql.com/downloads/installer/",children:"MySQL"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"File/Folder"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:".github/"})}),(0,t.jsx)(n.td,{children:"Contains GitHub Actions workflows for CI/CD pipelines."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"db-data/"})}),(0,t.jsx)(n.td,{children:"Contains database files for local MySQL setup."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"helm/"})}),(0,t.jsx)(n.td,{children:"Helm charts for deploying the website and related services to Kubernetes."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"html/"})}),(0,t.jsx)(n.td,{children:"Additional HTML files for the Unity WebGL build."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keycloak-deployment/"})}),(0,t.jsx)(n.td,{children:"Configuration files for Keycloak deployment (if used for authentication)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"readmeImages/"})}),(0,t.jsx)(n.td,{children:"Images used in the README documentation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"resources/"})}),(0,t.jsx)(n.td,{children:"Additional resources or configuration files for the project."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"scripts/"})}),(0,t.jsx)(n.td,{children:"Utility scripts for deployment, testing, or setup."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Unity/"})}),(0,t.jsx)(n.td,{children:"Contains Unity project files, including assets and build configurations for the Science Island game."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Website/"})}),(0,t.jsx)(n.td,{children:"Main website folder containing the frontend and backend code."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"docker-compose.yml"})}),(0,t.jsx)(n.td,{children:"Docker Compose configuration for running the project locally in containers."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Dockerfile"})}),(0,t.jsx)(n.td,{children:"Dockerfile for building the project container image."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"README.md"})}),(0,t.jsx)(n.td,{children:"Documentation for setting up and running the project locally or on a server."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ToStartDocker.txt"})}),(0,t.jsx)(n.td,{children:"Instructions for starting the project using Docker."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ScienceIslandKeyPair.pem"})}),(0,t.jsx)(n.td,{children:"Key pair for secure access to AWS or other services."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"appspec.yml"})}),(0,t.jsx)(n.td,{children:"AWS CodeDeploy configuration for deploying the project to an EC2 instance."})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"local-development-without-using-xampp",children:"Local Development Without using XAMPP"}),"\n",(0,t.jsx)(n.p,{children:"Navigate to the Science Island Website Directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd ScienceIslandWebsite\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run Docker Compose"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ docker compose build --pull --no-cache\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ docker compose up -d\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-d"})," detached mode is optional"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once it's running, go to your web browser and type in"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"locahost:8000\n"})}),"\n",(0,t.jsx)(n.p,{children:"and the Science Island Website and Game should be running locally."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);