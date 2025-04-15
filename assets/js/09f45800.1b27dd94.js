"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[4079],{3202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tools/keycloak/keycloak-admin-console/clients","title":"Clients","description":"Clients are applications within your organization. Often, a client will want a user to be authenticated, which is where KeyCloak comes in as an identity and access management solution. In the case of Science Island, there are presently three applications (hence three Clients): The Game and Website, The Teachers Portal and the The Curriculum Mapper.","source":"@site/docs/02-tools/05-keycloak/02-keycloak-admin-console/03-clients.md","sourceDirName":"02-tools/05-keycloak/02-keycloak-admin-console","slug":"/tools/keycloak/keycloak-admin-console/clients","permalink":"/si-docs/tools/keycloak/keycloak-admin-console/clients","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/05-keycloak/02-keycloak-admin-console/03-clients.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Users","permalink":"/si-docs/tools/keycloak/keycloak-admin-console/users"},"next":{"title":"Keycloak Configuration","permalink":"/si-docs/category/keycloak-configuration"}}');var s=n(4848),l=n(8453);const r={sidebar_position:3},c="Clients",o={},d=[{value:"Creating a Client",id:"creating-a-client",level:2},{value:"General Settings",id:"general-settings",level:4},{value:"Capability config",id:"capability-config",level:4},{value:"Login Settings",id:"login-settings",level:4}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"clients",children:"Clients"})}),"\n",(0,s.jsxs)(t.p,{children:["Clients are applications within your organization. Often, a client will want a user to be authenticated, which is where KeyCloak comes in as an identity and access management solution. In the case of Science Island, there are presently three applications (hence three Clients): ",(0,s.jsx)(t.em,{children:"The Game and Website"}),", ",(0,s.jsx)(t.em,{children:"The Teachers Portal"})," and the ",(0,s.jsx)(t.em,{children:"The Curriculum Mapper"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-client",children:"Creating a Client"}),"\n",(0,s.jsxs)(t.p,{children:["Navigate to the ",(0,s.jsx)(t.em,{children:"Client"})," option on the side bar, underneath ",(0,s.jsx)(t.em,{children:"Manage"}),". Here you should see a list of clients. Ignore these for now and select the ",(0,s.jsx)(t.em,{children:"Create client"})," button above the list. To create a client, we first have to define some general settings and configurations."]}),"\n",(0,s.jsx)(t.h4,{id:"general-settings",children:"General Settings"}),"\n",(0,s.jsx)(t.p,{children:"These settings are primarily used to identify the client, both by internal systems and administrators."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Client type"})}),(0,s.jsx)(t.td,{children:"Specifies the authentication protocol the client uses. KeyCloak provides both OpenID Connect and SAML options. This guide assumes the use of OpenID Connect."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Client ID"})}),(0,s.jsx)(t.td,{children:"The name of the client, registered with the identity provider and used for internal reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Name"})}),(0,s.jsx)(t.td,{children:"The display name of the client, useful for clarity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Description"})}),(0,s.jsx)(t.td,{children:"A description of the client, useful for clarity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Always display in UI"})}),(0,s.jsx)(t.td,{children:"A toggle for displaying the client in the users account page. If toggled off, the client will only appear if the user has an active session with the client."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"capability-config",children:"Capability config"}),"\n",(0,s.jsxs)(t.p,{children:["These settings define the authentication protocols of the client, and if the client needs to include specific authorization rules. These settings will only appear if the ",(0,s.jsx)(t.code,{children:"Client type"})," was set to ",(0,s.jsx)(t.em,{children:"OpenID Connect"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Client authentication"})}),(0,s.jsxs)(t.td,{children:["A toggle that defines the client as ",(0,s.jsx)(t.code,{children:"Public"})," (off) or ",(0,s.jsx)(t.code,{children:"Confidential"})," (on)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Authorization"})}),(0,s.jsxs)(t.td,{children:["Enables the use of KeyCloak's Authorization Services (",(0,s.jsx)(t.em,{children:"Role Based Access Control"}),", ",(0,s.jsx)(t.em,{children:"permission evaluation"}),", etc)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Authentication flow"})}),(0,s.jsxs)(t.td,{children:["Defines the ",(0,s.jsx)(t.a,{href:"https://www.keycloak.org/docs/latest/server_admin/index.html#con-oidc-auth-flows_server_administration_guide",children:"OIDC Auth Flow"})," of the client."]})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"login-settings",children:"Login Settings"}),"\n",(0,s.jsx)(t.p,{children:"These settings are used to link the actual application to the client currently being created. It defines where users will be coming from when they need to use KeyCloak's authentication, and where users will go once they've been authenticated."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Root URL"})}),(0,s.jsx)(t.td,{children:"The base URL of the app. Only use if KeyCloak has configured any relative URLs. This value will be prepended to them."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Home URL"})}),(0,s.jsxs)(t.td,{children:["The default URL used to redirect or link back to the client. ",(0,s.jsx)(t.strong,{children:"NOT"})," the URL that KeyCloak sends authentication responses to."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Valid redirect URIs"})}),(0,s.jsx)(t.td,{children:"Valid URI pattern(s) a browser can redirect to after a successful login. If different logins direct to different pages, a wildcard (*) can be used."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Valid post logout redirect URIs"})}),(0,s.jsx)(t.td,{children:"Valid URI pattern(s) a browser can redirect to after a successful logout. Same wildcard rules apply."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Web origins"})}),(0,s.jsx)(t.td,{children:"The URL of the application. Or, where KeyCloak is expecting a user to come from."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);