---
sidebar_position: 1
---

# Overview

The following pages are derived from the Weekly PM Meetings, on this page you will find all the questions and links to their answers. 

## Auth Questions

| Question | Author | Answer |
|----------|--------|--------|
| It looks like si-auth-service set's up an (empty) mysql image, as well as a website/game image here. Additionally, it looks like ScienceIslandWebsite creates a keycloak image here. <br />Are these artefacts from past implementations and redundant now, or do they serve a purpose? | Matthew Cross | [Meeting #1](./02-meeting-1.md) |
| What is the benefit of using the bitnami keycloak image over the regular keycloak image? | Matthew Cross | [Meeting #1](./02-meeting-1.md) |
| Would love a walkthrough of how the login.scienceisland.com subdomain is meant to work. Right now, it seems like the student / teacher logins route directly to the keycloak admin login page. | Matthew Cross | [Meeting #1](./02-meeting-1.md) |
| Is there somewhere that Keycloak has been configured already (E.g., clients, roles, scopes, sessions, etc) or is that for us to set up? | Matthew Cross | [Meeting #1](./02-meeting-1.md) |
| Quick overview of port management - specifically, I've been mapping the keycloak image port to something other than 8080 for si-auth-service locally since it conflicts with the reverse proxy that caddy sets up. Is there a .env file in the live deployment that remaps the port? | Matthew Cross | [Meeting #1](./02-meeting-1.md) |
| Are keycloak themes purely aesthetic, or is it adding some functionality to the admin console? (Is there even a theme currently on the live version?) | Matthew Cross | [Meeting #1](./02-meeting-1.md) |

## UI/UX Questions

| Question | Author | Answer |
|----------|--------|--------|
| For future (probably next semester): if we want to update the live files, the ones currently on the Internet, how would we go about that? | Avery | [Meeting #1](./02-meeting-1.md) |
| For the live demo, in my opinion it would be much easier to produce locally than live. What do you think? | Rany | [Meeting #1](./02-meeting-1.md) |

