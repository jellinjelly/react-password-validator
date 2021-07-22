# Password Validation Component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to get started

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Validate implementation with testing

## About

Used CRA to create a demo of a password validation component because of its quick set up. Depending on the project requirements, Gatsby or Next.js can be used instead.

Includes the following password validations:
  - Contains a Number
  - Contains an UpperCase letter
  - Contains a special character !@#$%^&*

Additional validations can be added via `listOfValidators.json` and `usePasswordValidation.js`. Must be added to both.

#### `listOfValidators.json`

This file contains all the descriptions for each validation to be displayed. Append to this list for additional validations

#### `usePasswordValidation.js`

This file is a custom hook used for validating each password requirement validation.

## Props

| Name     |      Type     |   Description                                      |
|----------|:-------------:|:--------------------------------------------------:|
| options  |     Object    | Password Requirements from `listOfValidators.json` |

