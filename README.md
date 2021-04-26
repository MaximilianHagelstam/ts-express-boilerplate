# TS Node Starter

The purpose of this repository is to simplify and speed up the process of starting a new Node.js TypeScript project. A lot of this quick starts content was inspired or adapted from Microsofts [TypeScript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter/).

[![Actions Status: build](https://github.com/MaximilianHagelstam/ts-node-starter/actions/workflows/nodejs.yml/badge.svg)](https://github.com/MaximilianHagelstam/ts-node-starter/actions?query=workflow%3A"node")

## Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Features](#features)
- [Dependencies](#dependencies)
  - [dependencies](#dependencies)
  - [devDependencies](#devdependencies)
- [Scripts](#scripts)
- [License](#license)

## Pre-reqs

To build and run this app locally you will need to install [Node.js](https://nodejs.org/en/)

## Getting started

1.  Make sure that you have Node.js and npm installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/MaximilianHagelstam/ts-node-starter.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
4.  Add a `MONGO_URI` repository secret with db connection string.
5.  Run `npm install` to install dependencies.
6.  Run `npm run build` to compile the example app.
7.  Run `npm start` to start the example app.

## Features

- Express.js server
- MongoDB connectivity
- Supertest and Jest testing
- GitHub actions
- Winston logger
- ESLint and Prettier
- Enviorment variables

## Scripts

| Script          | Description                                  |
| --------------- | -------------------------------------------- |
| `npm start`     | Run compiled JavaScript build in production  |
| `npm run dev`   | Run TypeScript source code in development    |
| `npm run build` | Compile TypeScript source code to JavaScript |
| `npm test`      | Run test suites                              |
| `npm run lint`  | Find and fix ESLint problems                 |

## Dependencies

### dependencies

| Package  | Description                                |
| -------- | ------------------------------------------ |
| dotenv   | Loads environment variables from .env file |
| express  | Node.js web framework                      |
| winston  | Logging library                            |
| mongoose | MongoDB ODM                                |

### devDependencies

| Package                | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| @types                 | Dependencies in this folder are `.d.ts` files used to provide types    |
| nodemon                | Utility that automatically restarts node process when it crashes       |
| ts-node                | Enables directly running TS files                                      |
| eslint                 | Linter for JavaScript and TypeScript files                             |
| typescript             | JavaScript compiler/type checker that boosts JavaScript productivity   |
| eslint-plugin-prettier | ESLint plugin for Prettier formatting                                  |
| prettier               | Code formatter                                                         |
| ts-jest                | A preprocessor with sourcemap support to help use TypeScript with Jest |
| supertest              | HTTP assertion library.                                                |
| jest                   | Testing library for JavaScript.                                        |

## License

This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.
