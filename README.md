test
# blog-clone web application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

live example: https://blog-clone.herokuapp.com/


Features/Ideas:

This is a blog post web application similar to sites like reddit, medium and stack overflow.

Application includes user profiles, friend requests, blog posts, topic search, user feed,
blog likes and user reputation.  
Content will be recommended via user feed, based on likes AND various CS topics: (ML, AI, web development, NLP, iot, programming languages, etc.).
Users public feed will deliver relevant content based on users behavior, as well as new topics the user hasn't previously seen. 	
Includes clustering algorithm to recommend content, in browser code editor for sharing/ running code snippets.

## Getting Started:
Clone the repo.

Make sure you have [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/) installed.

Run `npm install` to install dependancies.

Run `npm start` for a dev server. Navigate to `http://localhost:3000/` and `http://localhost:3000/api`.

The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. Needed to push to heroku. [Heroku](https://dashboard.heroku.com/).

Note package.json postinstall script

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
