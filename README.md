# angular-material-boilerplate
A straightforward and well structured boilerplate based on Google's Angular Material project.

## Features
* Live reload
* Organised folder structure
* Minified CSS, HTML and JS build files
* Minified images.
* SASS support
* Responsive layout
* Mobile ready
* [Material Design Icons](https://material.io/icons/) icons
* Support for Unit & E2E Testing
* Unit Test reporting
* [ESLint](http://eslint.org/) code analysis tool.
* [Jasmine](http://jasmine.github.io/2.3/introduction.html) testing framework
* [Karma](http://karma-runner.github.io/0.13/index.html) test runner
* [Protractor](https://angular.github.io/protractor/#/)  end-to-end test framework

## Live Demo
[Check out the live demo](http://cmacdonnacha.github.io/angular-material-boilerplate/)

## Setup
1. `git clone https://github.com/cmacdonnacha/angular-material-boilerplate.git myApp`
2. `cd myApp`
3. `npm install`

## Quick Usage
* `npm start` : Creates a development build folder called `public` and serves it on: [`http://localhost:3000/`](http://localhost:3000/)
* `npm start --production` : Creates a production ready folder called `production` and serves it on: [`http://localhost:4000/`](http://localhost:4000/)
* `npm test` : Runs code checks, unit tests and E2E tests.
* `npm run unit` : Runs unit tests only.
* `npm run e2e` : Runs E2E tests only. 
* `npm run eslint` : Runs an ESLint code check only.
* `npm run coverage` : Creates and serves the unit test coverage reports on: [`http://localhost:5000/`](http://localhost:5000/)
* `npm run build` : Creates the `public` build folder but doesn't serve it.
* `npm run build --production` : Creates the `production` build folder but doesn't serve it.

## Project Structure
This project follows a **"Folders-by-Feature"** structure very similar to [John Papa's Styleguide](https://github.com/johnpapa/angular-styleguide#application-structure). From the screenshot below you can see that there are 6 separate features, a folder for each one.
Each feature is treated as a mini Angular app. This structure allows us developers to easily locate code and identify what each file represents at a glance.
By retaining this structure the project is much more manageable as it grows.

![alt text](http://i.imgur.com/9jYKIoi.png "Folders-by-Feature structure")

* The `app` folder contains the following individual features:
    * `about`: Contains the about page related files.
    * `layout`: The high level layout container which stitches it all together.
    * `shared`: Contains all shared services, directives, styles etc. used across the entire app.
    * `sidenav`: Contains the sidenav related files.
    * `todo`: Contains the todo page related files.
    * `toolbar`: Contains the toolbar related files.

* The `assets` folder contains all globally used images.

#### Adding a new feature folder
In the future I hope to automate the ability to create a new feature folder but for now, check out the [wiki](https://github.com/cmacdonnacha/angular-material-boilerplate/wiki/How-to-add-a-new-feature) to see how you can go about adding one manually.

## Troubleshooting
Even crème de menthe projects have their issues. Here are some problems you may face along with some suggestions on how to resolve them:

#### 1. Issue: I'm getting the following error: ***"Error: EPERM or operation not permitted or permission denied"***
This can happen when trying to delete a folder that's already in use. For example when running `npm test` while the `npm start` task is already running.

**Suggestion:**

1. Stop any tasks that are already running and try again.

#### 2. Issue: I'm getting the following error when running the `npm test` task: ***"No selenium server jar found at the specified location"***
**Suggestion:** Run the following command and try again: `npm run webdriver-update`
<br>
<br>

This project has been tested with the following tools:
* **NodeJs:** 6.9.2
* **Npm:** 3.10.9

If you are running into issues while installing node packages then ensure you have the versions above installed.

## Contribute
Believe it or not, **angular-material-boilerplate** is not perfect. If you want to improve it somehow then by all means go ahead and create a pull request :-)

## TODO
- Add source maps
- Automate ability to add new feature folder
- Switch to Material SVG icons
