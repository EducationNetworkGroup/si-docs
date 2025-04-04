"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[4542],{8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}},8531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"tools/docker/deploy-existing-image-locally","title":"Deploy Existing Image Locally","description":"Before learning how to deploy an Image to a server, it is useful to look at how to deploy one within a local Container.","source":"@site/docs/02-tools/03-docker/02-deploy-existing-image-locally.md","sourceDirName":"02-tools/03-docker","slug":"/tools/docker/deploy-existing-image-locally","permalink":"/si-docs/tools/docker/deploy-existing-image-locally","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/03-docker/02-deploy-existing-image-locally.md","tags":[],"version":"current","lastUpdatedBy":"MatthewLeigh","lastUpdatedAt":1743730402000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"The Basics","permalink":"/si-docs/tools/docker/the-basics"},"next":{"title":"Deploy Custom Image Locally","permalink":"/si-docs/tools/docker/deploy-custom-image-locally"}}');var i=n(4848),r=n(8453);const s={sidebar_position:2},l="Deploy Existing Image Locally",a={},c=[{value:"Deploy Container",id:"deploy-container",level:2},{value:"Check Ports",id:"check-ports",level:2},{value:"Stop a Container",id:"stop-a-container",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"deploy-existing-image-locally",children:"Deploy Existing Image Locally"})}),"\n",(0,i.jsx)(t.p,{children:"Before learning how to deploy an Image to a server, it is useful to look at how to deploy one within a local Container."}),"\n",(0,i.jsx)(t.h2,{id:"deploy-container",children:"Deploy Container"}),"\n",(0,i.jsx)(t.p,{children:"The easiest way to do this is to break down a single command, to see what is doing what."}),"\n",(0,i.jsx)(t.p,{children:"Start by running this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ docker run -d -p 8080:8080 -p 8081:8081 --name hello-world testcontainers/helloworld\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then open ",(0,i.jsx)(t.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})," or ",(0,i.jsx)(t.a,{href:"http://localhost:8081/",children:"http://localhost:8081/"})," to see the image."]}),"\n",(0,i.jsx)(t.p,{children:"Here's a quick breakdown of what everything does:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Part"}),(0,i.jsx)(t.th,{children:"Meaning"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"docker run"})}),(0,i.jsx)(t.td,{children:"Start a new container from an image."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-d"})}),(0,i.jsxs)(t.td,{children:["Runs the container in ",(0,i.jsx)(t.em,{children:"detach mode"}),". This means that is runs in the background, without being tied to the terminal where you run the command."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-p 8080:8080"})}),(0,i.jsxs)(t.td,{children:["Maps port 8080 on the host to port 8080 in the container (host",":container",")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-p 8081:8081"})}),(0,i.jsx)(t.td,{children:"Shows that you can have multiple ports mapped for the container. This is useful for allowing external access to service running inside the container."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--name hello-world"})}),(0,i.jsx)(t.td,{children:"Assigns a custom name to the container (i.e., hello-world). This simplifies container management and later commands, as without it Docker will generate a random name for the container (e.g., wonderful_design)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"testcontainers/helloworld"})}),(0,i.jsx)(t.td,{children:"The name of the Docker image being used. If the image isn't available locally, Docker will attempt to pull it from Docker Hub."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"check-ports",children:"Check Ports"}),"\n",(0,i.jsxs)(t.p,{children:["If you don't define any ports, Docker will pick them randomly. Additionally, you might simply forget which ports you have running for a particular container. In either case, to check with ports the Container is running on, you can run int ",(0,i.jsx)(t.code,{children:"docker port <name>"})," command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ docker port hello-world\n8080/tcp -> 0.0.0.0:8080\n8081/tcp -> 0.0.0.0:8081\n"})}),"\n",(0,i.jsx)(t.h2,{id:"stop-a-container",children:"Stop a Container"}),"\n",(0,i.jsxs)(t.p,{children:["To stop a non-detached container, simply hit ",(0,i.jsx)(t.code,{children:"ctrl c"})," or exit the terminal."]}),"\n",(0,i.jsxs)(t.p,{children:["To stop a detached container, run the ",(0,i.jsx)(t.code,{children:"docker stop <name>"})," command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ docker stop hello-world\nhello-world\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);