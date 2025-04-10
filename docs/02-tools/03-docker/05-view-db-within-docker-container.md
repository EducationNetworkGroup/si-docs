---
sidebar_position: 5
---

# View Database within a Docker Container

This guide provides an overview of how to view a `Postgres` or `MySQL` database running within a container via the CLI *without exposing the port*.

---

## Postgres

You will need four pieces of information before we start:

1. The name of the container. In this example, the name is `postgres-db`.
2. The name of the database user. In this it is `username`.
3. The password of the database user. In this example, it's `password`.
4. The name of the database. In this example, the name is `db-name`.

> The easiest way to find the name of the container is by running `docker ps` once the containers are running. 
>
> The username and password can generally be found in the `docker-compose.yml`, `Dockerfile`, or `.env` file.

From the terminal, run:

```bs
docker exec -it postgres-db sh
psql -U username -d db-name
```

Enter the password if you are prompted.

To verify it worked, run `\dt` to view the tables.

---

## MySQL

You will need four pieces of information before we start:

1. The name of the container. In this example, the name is `mysql-db`.
2. The name of the database user. In this example, it's `username`.
3. The password of the database user. In this example, it's `password`.
4. The name of the database. In this example, the name is `db-name`.

> The easiest way to find the name of the container is by running `docker ps` once the containers are running.
>
> The username and password can generally be found in the `docker-compose.yml`, `Dockerfile`, or `.env` file.

From the terminal, run:

```bs
docker exec -it mysql-db sh
mysql -u username -p
```

Enter the password if you are prompted.

Next, enter the following to set the database.

```bash
USE db-name;
```

To verify it worked, run `SHOW TABLES;` to view the tables.
