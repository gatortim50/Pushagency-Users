## This is an pre-employment test for Pushagency.io

the directions are given under code-assessemnt/README.md

```
## README

### The API

This app provides a simple JSON API for retrieving a list of users and a
list of tasks for each user. There are 2 routes provided by this API:

- **/v1/api/users**
- https://push-code-assessment.herokuapp.com/v1/api/users

 Returns an array of user objects each with an ID and a name property.

- **/v1/api/users/:id/tasks**
- https://push-code-assessment.herokuapp.com/v1/api/users/:id/tasks

 Returns an array of message strings.

### The Objective

Build a JavaScript application that retrieves the list of users and the
tasks for each user from this API, which is [hosted
here](https://push-code-assessment.herokuapp.com). Once data is
available, render the results to the screen.

Feel free to write your solution on JSFiddle, CodePen or even a
standalone HTML file. The UI itself should be kept simple and basic,
wire-framed HTML is acceptable. All we want to see is the users and
their tasks visually grouped together.

Ultimately, we're looking for clean JavaScript that handles the
various asynchronous aspects of this problem in an elegant and
maintainable way. Feel free to use any library of choice, such as
AngularJS, React, jQuery or even vanilla JavaScript. Please do not over
complicate the problem and strive to create a simple solution.

```

# Tools AngularJS 1.5, gulp, bower and npm

git clone git@github.com:gatortim50/Pushagency-Users.git

cd $_
npm install
bower install

gulp serve 
runs the application on http://localhost:3000/#/
