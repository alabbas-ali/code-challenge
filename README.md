# Code Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15. 

The Project is an example of using REST-API `http://dummy.restapiexample.com/` to List, add, edit and remove an employ.

This project is Hosted publiclly free AWS under `https://codechallenge.club/`  

The application is using the tsconfig to define some application pathes for including shortening

## Libraries

- [Angular 9.1](https://angular.io/) As a development freamwork.
- [mdbootstrap](https://mdbootstrap.com/docs/angular/getting-started/quick-start/) for Material Design UI/UX.
- [postcss with autoprefixer ](https://github.com/valor-software/ng2-charts) for add vendor prefixes to CSS rules.
- [ESlint](https://blog.palantir.com/tslint-in-2019-1a144c2317a9) As TSlint is deprecated 
- [@ngrx/store](https://ngrx.io/guide/store) for sharing controlled state container in the application and reaction between components.

## Installation

Run `npm i` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Lint Project

Run `npm run lint` to check the lint proplems. or `npm run lint--autofix` to activate the autofixer from fixing the possible lint erros to fix.

# Docker Run

Run `docker build . -t alabbas/code-challenge` create the image with tag alabbas/code-challenge.

Run `docker images` command to list all the docker images in your machine.

Run `docker run -p 3000:80 alabbas/code-challenge` to run the docker image.

Navigate to your browser with `http://localhost:3000`
