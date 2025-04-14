"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[4716],{7681:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tools/helm/values-file-structure","title":"values.yaml File Structure","description":"The values.yaml file in a Helm chart defines default configuration values for the chart\'s templates. It allows customization of deployment settings like images, services, ingress, and subchart behavior without editing templates directly.","source":"@site/docs/02-tools/04-helm/03-values-file-structure.md","sourceDirName":"02-tools/04-helm","slug":"/tools/helm/values-file-structure","permalink":"/si-docs/tools/helm/values-file-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/04-helm/03-values-file-structure.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Chart.yaml File Structure","permalink":"/si-docs/tools/helm/chart-file-structure"},"next":{"title":"Kubernetes Temp","permalink":"/si-docs/tools/helm/kubernetes-temp"}}');var t=n(4848),r=n(8453);const a={sidebar_position:3},o="values.yaml File Structure",l={},c=[{value:"global",id:"global",level:2},{value:"storageClass",id:"storageclass",level:2},{value:"Context: StorageClass Template",id:"context-storageclass-template",level:3},{value:"ingress",id:"ingress",level:2},{value:"keycloak",id:"keycloak",level:2},{value:"image",id:"image",level:3},{value:"command",id:"command",level:3},{value:"metrics",id:"metrics",level:3},{value:"extraEnvVars",id:"extraenvvars",level:3},{value:"service",id:"service",level:3},{value:"customReadinessProbe",id:"customreadinessprobe",level:3},{value:"serviceAccount",id:"serviceaccount",level:3},{value:"postgresql",id:"postgresql",level:3}];function d(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"valuesyaml-file-structure",children:"values.yaml File Structure"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"values.yaml"})," file in a Helm chart defines default configuration values for the chart's templates. It allows customization of deployment settings like images, services, ingress, and subchart behavior without editing templates directly."]}),"\n",(0,t.jsx)(s.p,{children:"This document provides an annotated and simplified example of a values.yaml file that could be used for the si-auth-service Helm chart in Science Island."}),"\n",(0,t.jsx)(s.p,{children:"It is hard to define a generic values.yaml file as they are so specific to the project. To use this guide, please identify features you want to use in the sample, and then navigate to the appropriate section to see how they have been implemented in this example."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'global:\n  imagePullSecrets:\n    - dockerconfigjson-github-com\n  defaultStorageClass: keycloak-efs-ap\n\nstorageClass:\n  name: keycloak-efs-ap\n  provisioner: efs.csi.aws.com\n  parameters:\n    provisioningMode: efs-ap\n    fileSystemId: fs-xxxxxxxxxxxxxxxxx\n\ningress:\n  - domainName: login.scienceisland.com\n    servicePort: 8080\n\nkeycloak:\n  image:\n    registry: ghcr.io/educationnetworkgroup\n    repository: si-keycloak\n    tag: "main"\n    pullPolicy: Always\n\n  command:\n    - /opt/bitnami/keycloak/bin/kc.sh\n    - start\n    - --import-realm\n    - --hostname-debug=true\n    - --health-enabled=true\n    - --metrics-enabled=true\n\n  metrics:\n    enabled: true\n    service:\n      extraPorts:\n        - name: Admin Port\n          port: 9000\n          targetPort: 9000\n\n  extraEnvVars:\n    - name: KC_HOSTNAME\n      value: login.scienceisland.com\n    - name: KC_PROXY\n      value: edge\n\n  service:\n    ports:\n      http: 8080\n      https: 8443\n\n  customReadinessProbe:\n    httpGet:\n      path: /realms/master\n      port: 9000\n      scheme: HTTP\n    initialDelaySeconds: 30\n    periodSeconds: 10\n    timeoutSeconds: 1\n    failureThreshold: 3\n    successThreshold: 1\n\n  serviceAccount:\n    create: false\n    name: keycloak\n\n  postgresql:\n    enabled: true\n    volumePermissions:\n      containerSecurityContext:\n        runAsUser: 50000\n        runAsGroup: 50000\n    primary:\n      containerSecurityContext:\n        runAsUser: 50000\n        runAsGroup: 50000\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Please note that in this example, ",(0,t.jsx)(s.code,{children:"storageClass"})," and ",(0,t.jsx)(s.code,{children:"ingress"})," have been defined in templates, while ",(0,t.jsx)(s.code,{children:"keycloak"})," is a dependency."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"global",children:"global"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"global:\n  imagePullSecrets:\n    - dockerconfigjson-github-com\n  defaultStorageClass: keycloak-efs-ap\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"global"})," defines the global values which are shared across subcharts. Here, it is defining the following:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"imagePullSecrets"}),": Specifies the name of a Kubernetes secret that contains credentials for pulling container images from a private registry. This ensures the cluster can authenticate and retrieve images that aren\u2019t publicly accessible."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"defaultStorageClass"}),": Sets the default storage class to be used by charts that support dynamic volume provisioning. Subcharts that rely on persistent volumes (e.g., databases) can inherit this value instead of requiring it to be defined explicitly."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"storageclass",children:"storageClass"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"storageClass:\n  name: keycloak-efs-ap\n  provisioner: efs.csi.aws.com\n  parameters:\n    provisioningMode: efs-ap\n    fileSystemId: fs-xxxxxxxxxxxxxxxxx\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Here, ",(0,t.jsx)(s.code,{children:"storageClass"})," defines how storage will be provisioned for the deployment. The values defined here will be used to create a persistent volume in Kubernetes."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"}),": Specifies the name of the StorageClass to be used. In this example, it is ",(0,t.jsx)(s.code,{children:"keycloak-efs-ap"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"provisioner"}),": The provisioner is responsible for creating and managing persistent volumes. Here, it is set to ",(0,t.jsx)(s.code,{children:"efs.csi.aws.com"}),", which means the storage will be provisioned using Amazon ",(0,t.jsx)(s.code,{children:"Elastic File System (EFS)"})," with the ",(0,t.jsx)(s.code,{children:"Container Storage Interface (CSI)"})," driver."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"parameters"}),": Additional configuration parameters.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"provisioningMode"}),": Specifies the provisioning mode, which is set to ",(0,t.jsx)(s.code,{children:"efs-ap"})," in this case."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"fileSystemId"}),": Refers to the Amazon EFS file system ID that will be used to create the volume (if applicable). Replace fs-xxxxxxxxxxxxxxxxx with your actual file system ID."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"context-storageclass-template",children:"Context: StorageClass Template"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'kind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: {{ .Values.storageClass.name }}\nprovisioner: {{ .Values.storageClass.provisioner }}\nparameters:\n  provisioningMode: {{ .Values.storageClass.parameters.provisioningMode }}\n  fileSystemId: {{ .Values.storageClass.parameters.fileSystemId }}\n  directoryPerms: "777"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["This StorageClass Template demonstrates how Helm values are used to configure the StorageClass resource in Kubernetes. The ",(0,t.jsx)(s.code,{children:"{{ .Values.* }}"})," syntax pulls in values from the ",(0,t.jsx)(s.code,{children:"values.yaml"})," file. Here's what happens in the template:"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"ingress",children:"ingress"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"ingress:\n  - domainName: login.scienceisland.com\n    servicePort: 8080\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"ingress"})," section defines the external access settings for the service. In Kubernetes, an ingress is used to manage external access to the services within the cluster, typically HTTP. It allows you to expose HTTP and HTTPS routes to services based on their paths or domains."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"keycloak",children:"keycloak"}),"\n",(0,t.jsx)(s.h3,{id:"image",children:"image"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'image:\n  registry: ghcr.io/educationnetworkgroup\n  repository: si-keycloak\n  tag: "main"\n  pullPolicy: Always\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"image"})," section of a dependency defines the Docker image configuration. Here, we have defined the following:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"registry"}),": Specifies the Docker registry where the image is stored."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"repository"}),": Specifies the repository where in the image is stored / the name of the package."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"tag"}),": Specifies the version / variant of the image to use."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"pullPolicy"}),": Specifies when the image should be pulled from the registry. ",(0,t.jsx)(s.code,{children:"Always"})," means that the image is always pulled, even if it already exists locally. This is a good standard policy to ensure that the version is always up-to-date."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"command",children:"command"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"command:\n  - /opt/bitnami/keycloak/bin/kc.sh\n  - start\n  - --import-realm\n  - --hostname-debug=true\n  - --health-enabled=true\n  - --metrics-enabled=true\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"command"})," section specifies the commands to run when the container starts."]}),"\n",(0,t.jsx)(s.h3,{id:"metrics",children:"metrics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"metrics:\n  enabled: true\n  service:\n    extraPorts:\n      - name: Admin Port\n        port: 9000\n        targetPort: 9000\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"metrics"})," section controls the collection and exposure of metrics for monitoring purposes. Here, metrics are enable, and exposed via an Admin Port on port 9000."]}),"\n",(0,t.jsx)(s.h3,{id:"extraenvvars",children:"extraEnvVars"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"extraEnvVars:\n  - name: KC_HOSTNAME\n    value: login.scienceisland.com\n  - name: KC_PROXY\n    value: edge\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"extraEnvVars"})," section specifies additional environment variables which are passed to the container at runtime."]}),"\n",(0,t.jsx)(s.h3,{id:"service",children:"service"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"service:\n  ports:\n    http: 8080\n    https: 8443\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"service"})," section is used to define the configuration for exposing a service within the Kubernetes cluster or externally. It specifies the ports the service will use for communication and how it will be accessed. Here, we simply expose ports 8080 and 8443 to external and internal access."]}),"\n",(0,t.jsx)(s.h3,{id:"customreadinessprobe",children:"customReadinessProbe"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"customReadinessProbe:\n  httpGet:\n    path: /realms/master\n    port: 9000\n    scheme: HTTP\n  initialDelaySeconds: 30\n  periodSeconds: 10\n  timeoutSeconds: 1\n  failureThreshold: 3\n  successThreshold: 1\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"customReadinessProbe"})," section is used to configure a readiness probe for the service. A ",(0,t.jsx)(s.code,{children:"readiness probe"})," is an HTTP or TCP check that Kubernetes uses to determine whether the application is ready to accept requests. This ensures that Kubernetes only routes traffic to the container when it has passed the readiness check, ensuring better stability and reliability for the application."]}),"\n",(0,t.jsx)(s.p,{children:"In this example:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"httpGet"}),": Defines an HTTP request to check if the application is healthy. The request is made to /realms/master on port 9000 with the HTTP scheme."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"initialDelaySeconds"}),": Time to wait before starting the readiness checks after the container starts (30 seconds)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"periodSeconds"}),": The frequency at which the probe is executed (every 10 seconds)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"timeoutSeconds"}),": The time to wait for the probe to respond (1 second)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"failureThreshold"}),": The number of failed attempts before considering the container as not ready (3)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"successThreshold"}),": The number of successful probes before considering the container as ready (1)."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"serviceaccount",children:"serviceAccount"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"serviceAccount:\n  create: false\n  name: keycloak\n"})}),"\n",(0,t.jsx)(s.p,{children:"The serviceAccount section is used to configure the Kubernetes Service Account for the container. A Service Account provides an identity for processes running in a Pod to access the Kubernetes API or other services."}),"\n",(0,t.jsxs)(s.p,{children:["Here, we have set ",(0,t.jsx)(s.code,{children:"create"})," to ",(0,t.jsx)(s.code,{children:"false"}),", which and indicated that a pre-existing Service Account named ",(0,t.jsx)(s.code,{children:"keycloak"})," will be used, and Kubernetes will not create a new one."]}),"\n",(0,t.jsx)(s.h3,{id:"postgresql",children:"postgresql"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"postgresql:\n  enabled: true\n  volumePermissions:\n    containerSecurityContext:\n      runAsUser: 50000\n      runAsGroup: 50000\n  primary:\n    containerSecurityContext:\n      runAsUser: 50000\n      runAsGroup: 50000\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"postgresql"})," section is used to configure PostgreSQL-related settings, since we are using PostgreSQL as a part of the deployment. You can change this out for any db that is being used."]}),"\n",(0,t.jsx)(s.p,{children:"The following have ben set in this example:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"enabled"}),": This field is set to true, indicating that the PostgreSQL database is enabled and should be deployed alongside the other components. If set to false, PostgreSQL would be disabled and not part of the deployment."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"volumePermissions"}),": This section defines the security context for the volume that will store PostgreSQL data.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"containerSecurityContext"}),": Specifies the security settings for the container that handles PostgreSQL. In this example, the container is configured to run as a user with the UID 50000 and the GID 50000, which helps control file system permissions and ensures the container can read/write to the PostgreSQL data volume."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"primary"}),": This section specifies the container security settings for the primary PostgreSQL instance.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"containerSecurityContext"}),": Similar to the volumePermissions section, this specifies that the container running the primary PostgreSQL instance will also use the UID and GID 50000 to manage file permissions."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var i=n(6540);const t={},r=i.createContext(t);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);