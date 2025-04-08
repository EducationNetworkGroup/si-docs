---
sidebar_position: 2
sidebar_label: 'Meeting #1 - 08/04/2025'
---

# Meeting #1 - 08/04/2025

## Auth (6:30pm)

1. It looks like si-auth-service set's up an (empty) mysql image, as well as a website/game image here. Additionally, it looks like ScienceIslandWebsite creates a keycloak image here. Are these artefacts from past implementations and redundant now, or do they serve a purpose?

> Each of the `docker-compose.yaml` files was used as the development / local environment for each of the applications, as this point most are likely somewhat outdated due to the progress made; for example, realistically, except for `si-auth-service`, you could point your application at the hosted version, [login.scienceisland.com](https://login.scienceisland.com), assuming the client has been configured to accept requests from the local environment.

2. What is the benefit of using the bitnami keycloak image over the regular keycloak image?

> We utilize the bitnami helm chart, which comes with its own images. These images have some pros and cons, but the benefits generally exceed the downsides- e.g. non-root by default (big security win), pre-configured for production (logging, file-perms, etc), and Bitnami tends to be very responsive about patching CVEs and pushing updated images quickly.

3. Would love a walkthrough of how the login.scienceisland.com subdomain is meant to work. Right now, it seems like the student / teacher logins route directly to the keycloak admin login page.

> At the moment I beleive the main website's login is just linking to the keycloak login page; this is because the previous group wasn't able to implement the login and this was a placeholder value. 

4. Is there somewhere that Keycloak has been configured already (E.g., clients, roles, scopes, sessions, etc) or is that for us to set up?

> A proof-of-concept has been created (https://scienceisland.com/secure/test), but this is not fully implemented- the client was not permanently added to the realm and will need to be reconfigured (game.scienceisland.com). I do have another setup of Keycloak running for another project that could be used as an example.

5. Quick overview of port management - specifically, I've been mapping the keycloak image port to something other than 8080 for si-auth-service locally since it conflicts with the reverse proxy that caddy sets up. Is there a .env file in the live deployment that remaps the port?

> The docker-compose file in `si-auth-service` uses caddy to enable https; its proxies everything from https://localhost / http://localhost to the keycloak container- this is reduces some keycloak issues around https that're also minimized in the k8s cluster via similar methods. 

6. Are keycloak themes purely aesthetic, or is it adding some functionality to the admin console? (Is there even a theme currently on the live version?)

> While mainly aesthetic, the themes allow you to extend and customize the default experience. The themes are built using Freemarker templates that allow you to interface with keycloak for logic around user-attributes and so on.

## UI/UX (8:00pm)

1. For future (probably next semester): if we want to update the live files, the ones currently on the Internet, how would we go about that?

![Devops Diagram](./si-devops.drawio.svg)

> The above diagram outlines our CI/CD process; each of our application repos produce a Docker image and a Helm chart that are uploaded to GitHub Container Registry (https://ghcr.io/educationnetworkgroup); see our [Packages](https://github.com/orgs/EducationNetworkGroup/packages) for a list of tagged charts and images.

2. For the live demo, in my opinion it would be much easier to produce locally than live. What do you think?

> With all the infrastructure and processes that are now in-place, it would be a very comparable amount of effort either way.