"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[1949],{4031:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tools/docker/the-basics","title":"The Basics","description":"You can get an application up and running on your computer. Great! But what happens when you need to run it on another machine \u2014 maybe a server, a teammate\u2019s laptop, or a cloud environment? You could use a virtual machine (VM), which emulates an entire operating system, but VMs are bulky, slow to start, and consume a lot of resources. This is where Docker comes in. Instead of virtualizing an entire OS, Docker containers share the host system\u2019s kernel while keeping applications and their dependencies isolated. This makes containers lightweight, fast to start, and highly portable, ensuring your application runs the same way everywhere \u2014 without the overhead of traditional VMs.","source":"@site/docs/02-tools/03-docker/01-the-basics.md","sourceDirName":"02-tools/03-docker","slug":"/tools/docker/the-basics","permalink":"/tools/docker/the-basics","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/03-docker/01-the-basics.md","tags":[],"version":"current","lastUpdatedBy":"Nick","lastUpdatedAt":1743420983000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Docker","permalink":"/category/docker"},"next":{"title":"Deploy Existing Image Locally","permalink":"/tools/docker/deploy-existing-image-locally"}}');var i=t(4848),o=t(8453);const r={sidebar_position:1},a="The Basics",c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started Next Time",id:"getting-started-next-time",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Basic Commands",id:"basic-commands",level:2},{value:"docker pull",id:"docker-pull",level:3},{value:"docker images",id:"docker-images",level:3},{value:"docker run",id:"docker-run",level:3},{value:"docker run (multiple commands)",id:"docker-run-multiple-commands",level:3},{value:"docker ps",id:"docker-ps",level:3},{value:"docker rm",id:"docker-rm",level:3},{value:"docker container prune",id:"docker-container-prune",level:3},{value:"docker run --rm",id:"docker-run---rm",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"the-basics",children:"The Basics"})}),"\n",(0,i.jsx)(n.p,{children:"You can get an application up and running on your computer. Great! But what happens when you need to run it on another machine \u2014 maybe a server, a teammate\u2019s laptop, or a cloud environment? You could use a virtual machine (VM), which emulates an entire operating system, but VMs are bulky, slow to start, and consume a lot of resources. This is where Docker comes in. Instead of virtualizing an entire OS, Docker containers share the host system\u2019s kernel while keeping applications and their dependencies isolated. This makes containers lightweight, fast to start, and highly portable, ensuring your application runs the same way everywhere \u2014 without the overhead of traditional VMs."}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.p,{children:"Before we do anything else, we need to install Docker locally. You can check if it's installed already by running the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker --version\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to install it, the easiest way to the go to the ",(0,i.jsx)(n.a,{href:"https://www.docker.com/get-started/",children:"Docker Website"}),", click ",(0,i.jsx)(n.code,{children:"Download Docker Desktop"}),", and select the appropriate download for your OS. Follow the steps it gives you, making sure to create an account when prompted."]}),"\n",(0,i.jsx)(n.p,{children:"You can test that everything is working correctly by running the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker run hello-world\n\nHello from Docker.\nThis message shows that your installation appears to be working correctly.\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"getting-started-next-time",children:"Getting Started Next Time"}),"\n",(0,i.jsx)(n.p,{children:"When you return to Docker after shutting down your computer, you may get hit with an error like this one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.48/containers/json?all=1": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When that happens, the easiest fix is to simply open the ",(0,i.jsx)(n.code,{children:"Docker Desktop"})," app manually."]}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(n.p,{children:"The following are some key concepts for working with Docker."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Term"}),(0,i.jsx)(n.th,{children:"Definition"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Image"}),(0,i.jsx)(n.td,{children:"A lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including the code, runtime, libraries, and dependencies. It can help to think of an Image as a GitHub Repo for now."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Container"}),(0,i.jsx)(n.td,{children:"A runtime instance of a Docker image. It is a lightweight, standalone, and secure environment for running applications."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Dockerfile"}),(0,i.jsx)(n.td,{children:"A text document that contains all the commands to assemble a Docker image."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Registry"}),(0,i.jsx)(n.td,{children:"A storage and distribution system for Docker images, such as Docker Hub."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Volume"}),(0,i.jsx)(n.td,{children:"A mechanism for persisting data generated and used by Docker containers."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Network"}),(0,i.jsx)(n.td,{children:"A way to allow containers to communicate with each other or with external systems."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"basic-commands",children:"Basic Commands"}),"\n",(0,i.jsxs)(n.p,{children:["The best introduction to Docker is through an example. In this case, we will use the ",(0,i.jsx)(n.code,{children:"Busybox"})," image to run through some basic commands."]}),"\n",(0,i.jsx)(n.h3,{id:"docker-pull",children:"docker pull"}),"\n",(0,i.jsxs)(n.p,{children:["To get started, run the ",(0,i.jsx)(n.code,{children:"pull"})," command in the terminal."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker pull busybox\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This step is optional. If Docker is unable to find an image locally, it will automatically attempt to pull it for the ",(0,i.jsx)(n.code,{children:"Docker Registry"})," if you call ",(0,i.jsx)(n.code,{children:"docker run <image-name>"})," later."]}),"\n",(0,i.jsx)(n.h3,{id:"docker-images",children:"docker images"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pull"})," command fetches the Busybox ",(0,i.jsx)(n.code,{children:"image"})," from the ",(0,i.jsx)(n.code,{children:"Docker registry"})," and saves it to your system. To view all the images on your system, use the ",(0,i.jsx)(n.code,{children:"docker images"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker images\nREPOSITORY              TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\nbusybox                 latest              c51f86c28340        4 weeks ago         1.109 MB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"docker-run",children:"docker run"}),"\n",(0,i.jsxs)(n.p,{children:["Once images are saved to the system, we use the ",(0,i.jsx)(n.code,{children:"docker run"})," command to run them."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker run busybox`\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this case, nothing happens (at least we don't see anything happen). In the background, the Docker client:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Found the Busybox image,"}),"\n",(0,i.jsx)(n.li,{children:"Loaded the container, and"}),"\n",(0,i.jsx)(n.li,{children:"Ran a command in the container (we just didn't provide it with a command)."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If we try that again, but give it a command this time, we will see it do something."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ docker run busybox echo "cool, fun & engaging"\ncool, fun & engaging\n'})}),"\n",(0,i.jsx)(n.h3,{id:"docker-run-multiple-commands",children:"docker run (multiple commands)"}),"\n",(0,i.jsx)(n.p,{children:"We often want to be able to do more than just give the container a single command to run. We can do this by stringing a few things together in the command line:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-i"})," : The ",(0,i.jsx)(n.em,{children:"interactive"})," flag keep's the container's standard input open, allowing you to interact with it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-t"})," : The ",(0,i.jsx)(n.em,{children:"TTY"})," flag allocates a pseudo-terminal, making the container behave like a real terminal sessions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sh"})," : Specifies the the ",(0,i.jsx)(n.em,{children:"Bounre Shell"})," should run inside the container, essentially turning it into a simple Unix-based shell."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ docker run -it busybox sh\n/# echo "cool"\ncool\n/# echo "fun"\nfun\n/# echo "engaging"\nengaging\n/# exit\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Type ",(0,i.jsx)(n.code,{children:"exit"})," to finish entering commands."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"docker-ps",children:"docker ps"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"docker ps"})," command shows all of your currently running containers."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker ps\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Currently, there are no running container, so that command will, again, return nothing. Let's try it with the ",(0,i.jsx)(n.code,{children:"-a"})," (all) flag added, so we can see container that have been exited as well."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ docker ps -a\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                          PORTS     NAMES\ne3e76a2cee84   busybox   "sh"                     2 minutes ago   Exited (0) About a minute ago             stupefied_swartz\n1e71948a071c   busybox   "echo \'cool, fun & e\u2026"   8 minutes ago   Exited (0) 8 minutes ago                  elegant_benz\n'})}),"\n",(0,i.jsx)(n.h3,{id:"docker-rm",children:"docker rm"}),"\n",(0,i.jsx)(n.p,{children:"Even after they've exited, containers that remain on your system can take up precious memory. It is good practice to delete them when you are don't with them."}),"\n",(0,i.jsxs)(n.p,{children:["To delete individual containers, use the ",(0,i.jsx)(n.code,{children:"docker rm <CONTAINER ID>"})," or ",(0,i.jsx)(n.code,{children:"docker fm <NAMES>"})," command on the ID's you identify from ",(0,i.jsx)(n.code,{children:"docker ps -a"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker rm e3e76a2cee84\ne3e76a2cee84\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker rm elegant_benz\nelegant_benz\n"})}),"\n",(0,i.jsx)(n.p,{children:"This method will echo back the ID's of the container that have been successfully deleted."}),"\n",(0,i.jsx)(n.h3,{id:"docker-container-prune",children:"docker container prune"}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use ",(0,i.jsx)(n.code,{children:"docker container prune"})," to delete all stopped / exited containers on your system."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker container prune\nWARNING! This will remove all stopped containers.\nAre you sure you want to continue? [y/N] y\nDeleted Containers:\n1e71948a071ce3209115c34d75064626ff5c6bab2197be5a42afcbdaf00e0b60\n\nTotal reclaimed space: 4.096kB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"docker-run---rm",children:"docker run --rm"}),"\n",(0,i.jsxs)(n.p,{children:["When you set the ",(0,i.jsx)(n.code,{children:"--rm"})," flag after ",(0,i.jsx)(n.code,{children:"docker run"}),", the container is automatically deleted once it is stopped / exited."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ docker run --rm  -it busybox sh\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);