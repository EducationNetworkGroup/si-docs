---
title: "Database Development Timeline"
author: "Henry Richardson"
author_title: "2025 Authentication Integration Team"
author_url: "https://github.com/Todddotexe"
author_image_url: "https://avatars.githubusercontent.com/u/91923689?s=400&u=677ca290494ad30869dba48ba7812763385e6d89&v=4"
description: "A brief summary of the development timeline for the database."
date: 2025-10-28
---

After a decent amount of investigation on my part, I've managed to document a high-level summary of the development done on the database(s) within this project between 2021-2025

In case a future team feels the need to dive into the project history to better understand how the database was created and combined over the years, I've left my notes below.

<!--truncate-->

- **Early 2021**: Development on the [Teacher's Portal](https://github.com/EducationNetworkGroup/Platform) begins. `schema.sql` is created for the database. It primarily features data related to identification and administration (Users, Staff, Students, Schools, etc.)
- **Mid 2021**: Additional tables are added to the database via independent `.sql` files that are kept separate from `schema.sql`. These tables are related to content (`realms.sql`, `activity.sql`, etc.)
- **Late 2021**: Citing issues with the AWS deployment of the database, all aforementioned `.sql` files are combined into `allInOne.sql`

- **Early-Mid 2022**: [ScienceIslandWebsite](https://github.com/EducationNetworkGroup/ScienceIslandWebsite) is created. The previously completed Science Island Game is committed to this repo. Alongside this game is `science_island.sql`, which features a database closely related to game users (user_progress, purchased_item, shop, etc.)
- **Mid 2022**: `allInOne.sql` receives two major updates that add a significant amount of tables. It appears most of these tables relate to the [Curriculum Mapper](https://github.com/EducationNetworkGroup/Mapping-System-2022S2).

- **Mid 2023**: It appears after some significant development in a local environment, `science_island_backup.sql` is committed to [ScienceIslandWebsite](https://github.com/EducationNetworkGroup/ScienceIslandWebsite) and used as its primary database. It is heavily based on the aforementioned `science_island.sql`, sharing its naming conventions and tables. 
- **Late 2023**: In a single commit, `science_island_backup.sql` and ~4 variations of it appear in the [Teacher's Portal](https://github.com/EducationNetworkGroup/Platform) repo. Later that month, 3 more variations are committed, titled v4, v5 and v6. At the end of the 2023 cycle, it appears `v6.sql` was being used by both the [Teacher's Portal](https://github.com/EducationNetworkGroup/Platform) and [ScienceIslandWebsite](https://github.com/EducationNetworkGroup/ScienceIslandWebsite) for the live deployment. 

- **2024**: The team working this year spent a decent amount of time on containerization, local deployment overhauling, and AWS optimization. During this restructuring, `allInOne.sql` (which was still present in the [Teacher's Portal](https://github.com/EducationNetworkGroup/Platform)) was re-implemented as the primary database. Due to being focused on other parts of the project, this error was missed which meant minimal query updates took place.

- **2025**:  This team (us) (hi future teams) begun work on the project under the assumption `allInOne.sql` was the most up-to-date database in the project. As of late August 2025 we have caught the mistake and are working to revert any changes and move forward with the v6 schema (likely named something more appropriate by the time you read this comment).
- **2025 Part 2**: Hi again. Just one last note from me as I officially add this post to the blog: we ended up keeping the `allInOne` name while still reverting back to the original v6 schema. Between August 2025 and October 2025 we've made some minor alterations to the database, mostly with switching Composite Primary Keys to just Primary Keys (something that appeared to be half-complete by the 2023 team). We've also removed dummy data relating to users amd user progress, and replaced it with our own.