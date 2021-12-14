# Github API sorting demo

---

# Pre-requisites:

```
Node.js
```

## Libraries used:

    - Express as server middleware
    - Bunyan as logger

## Directory structure

    - commons for common and helper functions
    - config for storing all the configurations files and values.
    - log for maintaining log files
    - services for maintaining various service calls
    - test for storing all the test cases

## Instructions for setting-up using this boilerplate

    - Clone/Fork this project.
    - Copy .env.example to .env and store the configurations.
    - Install node dependencies

>     	npm install

    - Setup git remote to point to your repo

    - Via Docker: use `docker-compose` command. Note that it uses env file so make sure the env file is properly setup (Check env.example for instructions)

   
This project uses unauthenticated apis due to which results may not be as expected. When your search query requests multiple resources, the response will only contain the resources that you have access to and will not provide an error message listing the resources that were not returned.


### Run Project

> Dev mode : npm run dev

> Test: npm run test

> Run lint: npm run lint

> Run formatter: npm run format

### Configure project

- nodemon.json for making changes to app watch mode
- .eslinrc.js file to change linter rules
- .prettierrc file for configuring styling rules
- package.json for configuring project related scripts
