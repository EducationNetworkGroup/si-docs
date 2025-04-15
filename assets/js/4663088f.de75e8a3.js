"use strict";(self.webpackChunkscience_island_docs=self.webpackChunkscience_island_docs||[]).push([[4830],{6308:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"tools/keycloak/keycloak-admin-console/realms","title":"Realms","description":"A realm in Keycloak is equivalent to a tenant. Each realm allows an administrator to create isolated groups of applications and users. Each realm has a dedicated Admin Console for use by admins defined inside a respective realm.","source":"@site/docs/02-tools/05-keycloak/02-keycloak-admin-console/01-realms.md","sourceDirName":"02-tools/05-keycloak/02-keycloak-admin-console","slug":"/tools/keycloak/keycloak-admin-console/realms","permalink":"/si-docs/tools/keycloak/keycloak-admin-console/realms","draft":false,"unlisted":false,"editUrl":"https://github.com/EducationNetworkGroup/si-docs/tree/main/docs/02-tools/05-keycloak/02-keycloak-admin-console/01-realms.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Keycloak Admin Console","permalink":"/si-docs/category/keycloak-admin-console"},"next":{"title":"Users","permalink":"/si-docs/tools/keycloak/keycloak-admin-console/users"}}');var r=i(4848),t=i(8453);const l={sidebar_position:1},d="Realms",o={},a=[{value:"Creating a Realm",id:"creating-a-realm",level:2},{value:"Realm Settings",id:"realm-settings",level:2},{value:"SSL Configuration",id:"ssl-configuration",level:3},{value:"Email",id:"email",level:3},{value:"Template",id:"template",level:4},{value:"Connection &amp; Authentication",id:"connection--authentication",level:4},{value:"Login Page",id:"login-page",level:3},{value:"Login Screen Customization",id:"login-screen-customization",level:4},{value:"Email Settings",id:"email-settings",level:4},{value:"User Info Settings",id:"user-info-settings",level:4}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"realms",children:"Realms"})}),"\n",(0,r.jsx)(s.p,{children:"A realm in Keycloak is equivalent to a tenant. Each realm allows an administrator to create isolated groups of applications and users. Each realm has a dedicated Admin Console for use by admins defined inside a respective realm."}),"\n",(0,r.jsxs)(s.p,{children:["Initially, Keycloak includes a single realm, called ",(0,r.jsx)(s.code,{children:"master"}),". Admins in this realm have permissions to manage all other realms within the server instance. As a rule of thumb, you don't want to use the master realm to manage users and applications in your organization. Instead, admins should be defined in their respective realms."]}),"\n",(0,r.jsx)(s.h2,{id:"creating-a-realm",children:"Creating a Realm"}),"\n",(0,r.jsxs)(s.p,{children:["Accessing the ",(0,r.jsx)(s.em,{children:"Manage realms"})," page from the side bar, you should be presented with a list of your current realms. Selecting the ",(0,r.jsx)(s.em,{children:"Create realm"})," button, a menu will appear with fields for realm creation."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Realm name"})}),(0,r.jsx)(s.td,{children:"Defines the name of the realm. Used for internal referencing."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Enabled"})}),(0,r.jsx)(s.td,{children:"A toggle that dictates if the realm is enabled or disabled."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Resource file"})}),(0,r.jsxs)(s.td,{children:["Optionally, a ",(0,r.jsx)(s.a,{href:"/si-docs/tools/keycloak/keycloak-configuration/realm-files",children:"Realm File"})," can be imported here to automatically configure realms settings. Realm files are important for live deployment. Typically, you'll configure a realm in the Admin Console and export the realm file for later use."]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"realm-settings",children:"Realm Settings"}),"\n",(0,r.jsxs)(s.p,{children:["Accessible via the ",(0,r.jsx)(s.em,{children:"Realm Settings"})," option in the sidebar."]}),"\n",(0,r.jsx)(s.h3,{id:"ssl-configuration",children:"SSL Configuration"}),"\n",(0,r.jsxs)(s.p,{children:["In the ",(0,r.jsx)(s.em,{children:"General"})," tab. Each realm has an associated SSL Mode which dictates the SSL/HTTP requirements browsers and applications have to meet to interact with the realm. There are 3 options for SSL Mode, selectable in the ",(0,r.jsx)(s.em,{children:"Require SSL"})," dropdown box."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Option"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"External requests"})}),(0,r.jsx)(s.td,{children:"Users can interact with KeyCloak so long as they have a private IPv4 address."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"None"})}),(0,r.jsx)(s.td,{children:"The realm does not require SSL."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"All requests"})}),(0,r.jsx)(s.td,{children:"The realm requires SSL for all IP addresses."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"email",children:"Email"}),"\n",(0,r.jsx)(s.p,{children:"KeyCloak may need to send emails to verify users, change passwords, or notify an admin about a server event. This is where SMTP (Simple Mail Transfer Protocol) comes in. SMTP is the industry-standard protocol used for sending emails. By connecting Keycloak to a valid SMTP server (like Gmail, Outlook, or a company mail server), you can enable automated, secure email delivery for your realm."}),"\n",(0,r.jsx)(s.h4,{id:"template",children:"Template"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"From"})}),(0,r.jsxs)(s.td,{children:["The email address Keycloak will use as the sender of outgoing emails (e.g. ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.a,{href:"mailto:noreply@scienceisland.com",children:"noreply@scienceisland.com"})}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"From display name"})}),(0,r.jsxs)(s.td,{children:["The display name shown for emails sent by Keycloak (e.g. ",(0,r.jsx)(s.em,{children:"Science Island Support"}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Reply to"})}),(0,r.jsx)(s.td,{children:"If a user replies to an email, this is the address that receives the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Reply to display name"})}),(0,r.jsx)(s.td,{children:"The display name for the reply-to email."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Envelope from"})}),(0,r.jsx)(s.td,{children:'The email address used for handling bounced emails (errors like "email not found").'})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"connection--authentication",children:"Connection & Authentication"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Host"})}),(0,r.jsxs)(s.td,{children:["The SMTP server address used to send emails (e.g. ",(0,r.jsx)(s.em,{children:"smtp.gmail.com"})," or ",(0,r.jsx)(s.em,{children:"smtp.scienceisland.com"}),")."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Port"})}),(0,r.jsxs)(s.td,{children:["The port number used for connecting to the SMTP server. Modern setups often use ",(0,r.jsx)(s.code,{children:"465"})," or (more commonly) ",(0,r.jsx)(s.code,{children:"587"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Encryption"})}),(0,r.jsxs)(s.td,{children:["Encryption method for secure communication. ",(0,r.jsx)(s.code,{children:"SSL"})," is required for ",(0,r.jsx)(s.code,{children:"Port 465"}),", and ",(0,r.jsx)(s.code,{children:"StartTLS"})," is required for ",(0,r.jsx)(s.code,{children:"Port 587"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Authentication"})}),(0,r.jsx)(s.td,{children:"A toggle enabling or disabling KeyCloak authenticating with the SMTP server. Most SMTP providers require this to be enabled."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Username"})}),(0,r.jsx)(s.td,{children:"The SMTP username used for authenticating."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Authentication Type"})}),(0,r.jsxs)(s.td,{children:["Selects what authentication type is used for the SMTP server. Types include ",(0,r.jsx)(s.code,{children:"Password"})," or various ",(0,r.jsx)(s.code,{children:"Tokens"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"login-page",children:"Login Page"}),"\n",(0,r.jsx)(s.p,{children:"KeyCloak allows several customization options for the login page, which can make it convenient for users who have issues attempting authenticate with the server."}),"\n",(0,r.jsx)(s.h4,{id:"login-screen-customization",children:"Login Screen Customization"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"User registration"})}),(0,r.jsx)(s.td,{children:"Allows a person to register a user to the system. If disabled, new users can only be created by admins."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Forgot password"})}),(0,r.jsxs)(s.td,{children:["Allows the user to recover their account without a password. Requires ",(0,r.jsx)(s.code,{children:"Email"})," configuration above."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Remember me"})}),(0,r.jsx)(s.td,{children:"Allows the user to remain logged in between browser restarts. Does not protect against session expiration."})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"email-settings",children:"Email Settings"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Email as username"})}),(0,r.jsx)(s.td,{children:"Treats the email address as the username upon user creation."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Login with email"})}),(0,r.jsx)(s.td,{children:"Allows users to login with their email."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Duplicate emails"})}),(0,r.jsx)(s.td,{children:"Allow multiple users to have the same email address. Not recommended."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Verify email"})}),(0,r.jsxs)(s.td,{children:["Requests the user to verify their email after initial login. Requires ",(0,r.jsx)(s.code,{children:"Email"})," configuration above."]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"user-info-settings",children:"User Info Settings"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"Edit username"})}),(0,r.jsx)(s.td,{children:"Allows the user to edits their username after account creation. Some systems may require usernames to be static, so be aware before enabling this option."})]})})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>d});var n=i(6540);const r={},t=n.createContext(r);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);