# UserSignup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Scope and Purpose
Basic sign up page that contains form to fill first name,last name , email and password.

## Requirement
Internet connection
Install angular and node JS

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
 

## Build

 1) Enter the project folder in terminal
 2) Run 'npm install' to get node modules.
 3) Run 'npm start'
 3) Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Issues Faced
 1) I am sending data to the given url(https://demo-api.now.sh/users) using post method and getting post method successfull in the code. But the data is not getting updated in the given url. I checked the same post method to this url using POSTMAN. There also I got status 200. There is no error showing in console.


## Back log
 Couldn't do unit test.
