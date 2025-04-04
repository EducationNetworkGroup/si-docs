"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[3134],{3759:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"tools/docker/deploy-image-to-aws","title":"Deploy Image to AWS","description":"INCOMPLETE DOC. NOT SURE HOW TO DO THIS PROPERLY YET.","source":"@site/docs/02-tools/03-docker/05-deploy-image-to-aws.md","sourceDirName":"02-tools/03-docker","slug":"/tools/docker/deploy-image-to-aws","permalink":"/si-docs/tools/docker/deploy-image-to-aws","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/03-docker/05-deploy-image-to-aws.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Upload Image to Docker Hub","permalink":"/si-docs/tools/docker/upload-image-to-docker-hub"},"next":{"title":"Docker Compose","permalink":"/si-docs/category/docker-compose"}}');var t=o(4848),i=o(8453);const r={sidebar_position:5},c="Deploy Image to AWS",l={},a=[{value:"Dockerrun.aws.json",id:"dockerrunawsjson",level:2},{value:"Elastic Beanstalk Instance",id:"elastic-beanstalk-instance",level:2},{value:"Terminate the EB Instance",id:"terminate-the-eb-instance",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-image-to-aws",children:"Deploy Image to AWS"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"INCOMPLETE DOC. NOT SURE HOW TO DO THIS PROPERLY YET."})}),"\n",(0,t.jsxs)(n.p,{children:["This document goes over setting up a single Container in ",(0,t.jsx)(n.code,{children:"AWS Elastic Beanstalk (EB)"}),". For now, the document uses the ",(0,t.jsx)(n.a,{href:"https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fap-southeast-2.console.aws.amazon.com%2Fconsole%2Fhome%3FhashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26region%3Dap-southeast-2%26src%3Dheader-signin%26state%3DhashArgsFromTB_ap-southeast-2_305d027d876d9639&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=bXoW3ZA_TLE7S9jyRm0Mrz5L7txpyxoWjkAiERknbaU&code_challenge_method=SHA-256",children:"AWS Console"})]}),"\n",(0,t.jsx)(n.h2,{id:"dockerrunawsjson",children:"Dockerrun.aws.json"}),"\n",(0,t.jsxs)(n.p,{children:["When we configure the EB environment later, we are going to upload a file telling AWS everything it needs to know about the Docker Image. As it turns out, it doesn't actually need to know that much. In your ",(0,t.jsx)(n.code,{children:"first-image"})," folder create a file called ",(0,t.jsx)(n.code,{children:"Dockerrun.aws.json"})," and paste in the following - remembering to change the name to your own."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "AWSEBDockerrunVersion": "1",\n    "Image": {\n        "Name": "matthewcross97/first-image:v1",\n        "Update": "true"\n    },\n    "Ports": [\n        {\n            "ContainerPort": 80,\n            "HostPort": 3000\n        }\n    ],\n    "Logging": "/var/log/nginx"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"elastic-beanstalk-instance",children:"Elastic Beanstalk Instance"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to launch the EB instance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Log into AWS"}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Elastic Beanstalk"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Create Application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Configure environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Application information"}),", Enter ",(0,t.jsx)(n.code,{children:"Application Name"})," (Doesn't matter what you call it.)"]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Platform"}),", Set ",(0,t.jsx)(n.code,{children:"Platform"})," to ",(0,t.jsx)(n.code,{children:"Docker"})]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Application Code"}),", Set ",(0,t.jsx)(n.code,{children:"Version label"})," to ",(0,t.jsx)(n.code,{children:"test"}),", Select ",(0,t.jsx)(n.code,{children:"Upload you code"}),", Select ",(0,t.jsx)(n.code,{children:"Local file"}),", Upload your ",(0,t.jsx)(n.code,{children:"Dockerrun.aws.json"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Configure service access"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select a role with ",(0,t.jsx)(n.code,{children:"AWSElasticBeanstalkWebTier"})," and ",(0,t.jsx)(n.code,{children:"AWSElasticBeanstalkWorkerTier"})," permissions. (You may need to create the role in IAM separately.)"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Next"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Skip to review"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Submit"})]}),"\n",(0,t.jsx)(n.li,{children:"Wait for the instance to be ready - this may take a few minutes."}),"\n",(0,t.jsx)(n.li,{children:"Open the URL that AWS provides to see the Image."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"terminate-the-eb-instance",children:"Terminate the EB Instance"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you terminate the EB Instance if you don't need it anymore. To do this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var s=o(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);