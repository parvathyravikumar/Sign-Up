# UserSignup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Scope and Purpose
Basic sign up page that contains form to fill first name,last name , email and password.

## Requirement
Internet connection

## Technologies used
a) Angular JS(version 9) framework
b) SASS
c) Typescript
d) Bootstrap

Developed using Visual studio (IDE)

## Working
 Enter all the form fields for successfull registration.
 
## Validation
1) All fields are mandatory
2) Email validation using regular expression
3) Strong Password validation using regular expression(Password should contain Uppercase,lowercase, numbers and symbol)
4) Custom validation for Password (Password should not contain firstname and last name)

## Saving data
 After clicking register button, if all the data is entered correctly you can see registration successfull message.
 
## Issues Faced
 1) I am sending data to the given url(https://demo-api.now.sh/users) using post method and getting post method successfull in the code. But the data is not getting updated in the given url. I checked the same post method to this url using POSTMAN. There also I got status 200. There is no error showing in console.

##Back log
 Couldn't do unit test.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
