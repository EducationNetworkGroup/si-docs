"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[347],{2492:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"tools/docker/docker-compose/start","title":"Using Docker Compose","description":"Using Docker Compose in the CLI.","source":"@site/docs/02-tools/03-docker/06-docker-compose/03-start.md","sourceDirName":"02-tools/03-docker/06-docker-compose","slug":"/tools/docker/docker-compose/start","permalink":"/si-docs/tools/docker/docker-compose/start","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/03-docker/06-docker-compose/03-start.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"Using Docker Compose in the CLI."},"sidebar":"tutorialSidebar","previous":{"title":"Docker Compose File Structure","permalink":"/si-docs/tools/docker/docker-compose/docker-compose-file-structure"},"next":{"title":"Helm","permalink":"/si-docs/category/helm"}}');var i=s(4848),n=s(8453);const c={sidebar_position:3,description:"Using Docker Compose in the CLI."},r="Using Docker Compose",d={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Start without Cache",id:"start-without-cache",level:2},{value:"Interact with Individual Images",id:"interact-with-individual-images",level:2},{value:"Stop Images",id:"stop-images",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"using-docker-compose",children:"Using Docker Compose"})}),"\n",(0,i.jsxs)(t.p,{children:["Navigate to the directory containing the ",(0,i.jsx)(t.code,{children:"docker-compose.yml"})," file before running the following commands."]}),"\n",(0,i.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(t.p,{children:"Quickly build and run the images in detached mode. This is the easiest option for the majority of use cases."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"docker compose up -d --build\n"})}),"\n",(0,i.jsx)(t.h2,{id:"start-without-cache",children:"Start without Cache"}),"\n",(0,i.jsx)(t.p,{children:"To clear the cache and guarantee that you're building your project with the latest version of the images."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"docker compose build --pull --no-cache\ndocker compose up -d\n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Flag"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--pull"})}),(0,i.jsx)(t.td,{children:"Forces Docker to pull the latest base images from the registry before building, ensuring you are using the most up-to-date dependencies."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--no-cache"})}),(0,i.jsx)(t.td,{children:"Prevents Docker from using cached layers, forcing a full rebuild of the image. This ensures that all dependencies and build steps are executed from scratch."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"interact-with-individual-images",children:"Interact with Individual Images"}),"\n",(0,i.jsx)(t.p,{children:"Once running, the way you interact with images is the same as if you set them up individually. For instance, you can still you the following command to check the images."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"docker ps\n"})}),"\n",(0,i.jsx)(t.h2,{id:"stop-images",children:"Stop Images"}),"\n",(0,i.jsxs)(t.p,{children:["To stop all the images that the ",(0,i.jsx)(t.code,{children:"docker-compose.yml"})," set up, you can run the following command. Make sure you are still in the directory containing the docker-compose.yml file for this to work."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"docker compose down\n"})}),"\n",(0,i.jsx)(t.p,{children:"These optional flags can be helpful to include to free up space on your environment."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Flag"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-v"})}),(0,i.jsxs)(t.td,{children:["Removes named volumes created by docker compose. You almost always want to include this flag. For instance, if you create a postgres db image with a volume for its stored data, then including ",(0,i.jsx)(t.code,{children:"-v"})," will wipe that data when the container is stopped.."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--rmi all"})}),(0,i.jsx)(t.td,{children:"Removes all images used by any services in the compose file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"--rmi local"})}),(0,i.jsx)(t.td,{children:"Removes only the images built locally, and not the pulled images."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>r});var o=s(6540);const i={},n=o.createContext(i);function c(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);