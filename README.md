## Getting Started:
1. Clone the repo: `https://github.com/cgradwohl/Sluggit.git`

2. Go into repo: `$ cd Sluggit`

3. Make sure you have [npm](https://www.npmjs.com/) and [node](https://nodejs.org/en/) installed. Make sure you have [mongodb](https://www.mongodb.com/) installed.

4. `$ npm install` to install dependancies.

5. Start a local mongoDB instance `$ mongod`

6. `$ npm start` for a dev backend server.

7. Navigate to `http://localhost:3000/` to make sure backend app is working.

7. `$ cd angular-src` and then `$ ng serve` to start the local front end service.

8.  Navigate to `http://localhost:4200/` to see front end app.



The app will automatically reload if you change any of the source files.

## Live Application
[Sluggit](https://sluggit.herokuapp.com/ )

Our app URL: https://sluggit.herokuapp.com/


## Front End Resources We Used
easy custom bootstrap themes --> https://bootswatch.com/
simple bootstrap template --> http://getbootstrap.com/examples/starter-template/

## Known Bugs
currently bug free :) on 4/26/2017   


## Sluggit web application
live url: https://sluggit.herokuapp.com/


Features/Ideas:

This is a blog post web application similar to sites like reddit, medium and stack overflow.

Application includes user profiles, friend requests, blog posts, topic search, user feed,
blog likes and user reputation.  
Content will be recommended via user feed, based on likes AND various CS topics: (ML, AI, web development, NLP, iot, programming languages, etc.).
Users public feed will deliver relevant content based on users behavior, as well as new topics the user hasn't previously seen. 	
Includes clustering algorithm to recommend content, in browser code editor for sharing/ running code snippets.# blog-clone web application


## Code scaffolding

Run `ng g component <component-name>` to generate a new component.

## Build

Run `ng build` to build the project into the public folder. (Used to deploy to heroku)


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
