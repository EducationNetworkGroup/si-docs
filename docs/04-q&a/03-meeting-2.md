---
sidebar_position: 2
sidebar_label: 'Meeting #2 - 15/04/2025'
---

# Meeting #2 - 15/04/2025

## Auth (6:30pm)

1. Keycloak Theme: Discuss si-auth-service pull request. Specifically, touch on how Keycloak theme is currently being integrated.

> See [PR](https://github.com/EducationNetworkGroup/si-auth-service/pull/34/files#diff-dd2c0eb6ea5cfc6c4bd4eac30934e2d5746747af48fef6da689e85b752f39557); The theme is built using  [Keycloakify](https://keycloakify.dev) who provide the `build-keycloak-theme` command ([See Docs](https://docs.keycloakify.dev/deploying-your-theme)). Basically- the command produces the compiled Jar file- as Keycloak is a Java application it is extensible, in this instance by placing the Jar file in Keycloaks' `providers` directory. <br />In our Dockerfile, we copy from one image (keycloakify_jar_builder) to the other with the command:
```Dockerfile
COPY --from=keycloakify_jar_builder /opt/app/dist_keycloak/target/keycloakify-starter-keycloak-theme-6.0.2.jar /opt/bitnami/keycloak/providers/
```

2. `SI-` branches: Out of curiosity, does this workflow also trigger when a change is pushed to a branch starting with SI-? Or does it mean something else? There are a few branches starting with SI- in the repo that haven't been merged - do you know if they contain useful stuff for us to look at?

> This was an aspirational idea we had initally- althrough with the limitation of 1 live envionment, it was utimately fruitless. The idea was to have a Jira instance combined with the GitHub integration to correlate branches with story ids (e.g. SI-0001/story-name). I don't know of any useful code on other branches.

3. Updated to Docs: Thinking of turning the projects section (originally intended for end-of-year handover notes) into a blog section (to include more casual docs like the Q&A meetings). Thoughts on this?

> I'm not sure what is meant by this- let's discuss.

4. Advice for Sprint Demo: Any advice on making James happy when we demonstrate?

> James really likes to be able to see the changes you make live for himself- he's had lots of people imeplement something locally but not get into 'production'. 

5. View the Live DB: Suggestions on where to access the live database/s. Advice on how to not destroy everything when we access it.

> Once setup to access aws, you can use `kubectl port-forward` to get access to the hsoted database; port-forward the DB ports and access with something like pgadmin. Otherwise, edit the schema in the repos and re-deploy.

6. Cleaning up GitHub: Thoughts on deleting stale branches and stuff like this old sprint report or this demo repo to try and make everything a bit cleaner?

> I don't think there's much value to be gained in a cleanup- for the main website I would be all-for doing a new repo and copying all relevant parts over but the other applications are much cleaner and their size is not yet a problem.
