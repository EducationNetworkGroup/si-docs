"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[8783],{1151:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"guides/setup-local-environment/curriculum-mapper","title":"Curriculum Mapper (Mapping-System)","description":"Folder Structure","source":"@site/docs/03-guides/01-setup-local-environment/03-curriculum-mapper.md","sourceDirName":"03-guides/01-setup-local-environment","slug":"/guides/setup-local-environment/curriculum-mapper","permalink":"/si-docs/guides/setup-local-environment/curriculum-mapper","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/03-guides/01-setup-local-environment/03-curriculum-mapper.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Teacher Portal (Platform)","permalink":"/si-docs/guides/setup-local-environment/the-platform"},"next":{"title":"KeyCloak (si-auth-service)","permalink":"/si-docs/guides/setup-local-environment/keycloak"}}');var s=n(4848),i=n(8453);const d={sidebar_position:3},c="Curriculum Mapper (Mapping-System)",l={},o=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"Running the Curriculum Mapper Locally",id:"running-the-curriculum-mapper-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Instructions",id:"instructions",level:3}];function a(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"curriculum-mapper-mapping-system",children:"Curriculum Mapper (Mapping-System)"})}),"\n",(0,s.jsx)(r.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"File/Folder"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:".github/workflows"})}),(0,s.jsx)(r.td,{children:"GitHub Actions workflows for CI/CD pipelines."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:".idea/"})}),(0,s.jsx)(r.td,{children:"Contains project and module configuration files used by the IDEs to manage settings."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:".vscode/"})}),(0,s.jsx)(r.td,{children:"No debugging configurations have been set up yet."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"data samples/"})}),(0,s.jsx)(r.td,{children:"Intended to hold input files required to demonstrate the prototype using representative data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"docs/"})}),(0,s.jsx)(r.td,{children:"A previous team's documentation folder consisting of their sprint plans."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"helm/"})}),(0,s.jsx)(r.td,{children:"Seperate Helm charts for the backend and frontend with a set of Kubernetes templates."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"prototypes/"})}),(0,s.jsx)(r.td,{children:"Low and high-fidelity design assets."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"src/"})}),(0,s.jsx)(r.td,{children:"Source code."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"tests/"})}),(0,s.jsx)(r.td,{children:"User and system test files."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"ui/"})}),(0,s.jsx)(r.td,{children:"Graphical assets for the prototypes."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:".DS_Store"})}),(0,s.jsx)(r.td,{children:"Default folder created by macOS."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:".gitignore"})}),(0,s.jsx)(r.td,{children:"Files and directories ignored and untracked by Git."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"2022-S2-SC-BoxJelly.pem"})}),(0,s.jsx)(r.td,{children:"The file contains an RSA private key, which is used for secure encryption and decryption and should be kept confidential."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"README.md"})}),(0,s.jsx)(r.td,{children:"Documentation for setting up and running the Curriculum Mapper locally or on a server."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"deploy.yml"})}),(0,s.jsx)(r.td,{children:"GitHub Actions workflow that automates the deployment of a Mapping System to an EC2 instance using Docker Compose, triggered by a push to the main branch."})]})]})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"running-the-curriculum-mapper-locally",children:"Running the Curriculum Mapper Locally"}),"\n",(0,s.jsx)(r.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Node.js"}),"\n",(0,s.jsx)(r.li,{children:"Go"}),"\n",(0,s.jsx)(r.li,{children:"Redis"}),"\n",(0,s.jsx)(r.li,{children:"MySQL"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"instructions",children:"Instructions"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"In a terminal, navigate to the /src directory in the repository:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"cd src\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"To run the front-end container, enter the following command:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"docker-compose up -d --build frontend\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"To run the backend, change the directory to /src/backend then run the following command:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:"docker build -t backend\ndocker run -d -p 8088:8088 backend\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>c});var t=n(6540);const s={},i=t.createContext(s);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);