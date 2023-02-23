# Project Title

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Sources](#sources)

## About <a name = "about"></a>

Notes App made with Django and React.js (Typescript). This is a great project to get familiarized with both technologies. I did my own version, based on <a href="https://github.com/divanov11/Django-React-NotesApp">divanov11</a> NotesApp app.

## Getting Started <a name = "getting_started"></a>

### Prerequisites

Docker, docker compose and yarn are required. I'm currently using docker 23.0.1 and yarn 1.22.19.

### Installing

Copy the .env.example file as .env.

```
cp .env.example .env
```

In your terminal run the docker-compose file.

```
docker-compose up --build
```

Navigate inside the "frontend" folder, install yarn dependencies and run yarn in development.

```
yarn
yarn dev
```

The application should be running in http://localhost:5173/

## Usage <a name = "usage"></a>

It's a notes app. Just add the notes you want and that's all.

## Interesting sources used <a name = "sources"></a>

The Django and React DOM docs were my main sources (appart from ChakraUI docs to check some component names I forgot).

### Connection to Postgres

https://djangocentral.com/using-postgresql-with-django/

### Django REST framework

https://www.django-rest-framework.org/
