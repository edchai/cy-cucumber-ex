import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from '../../../pages/login/login.po';

const url = "https://coffee.studytube-staging16.nl/lms/users/all";

Given(`I open login page`, () => {
  cy.visit(url);
});

When(`I fill {string} field with {string} value`, (field, email) => {
    switch (field) {
        case 'email':
            loginPage.fillEmailField(email);
            break;
        case 'password':
            loginPage.fillPasswordField(email);
            break;
    }
});

Given(`I should click on 'Login' button`, () => {
    loginPage.clickLoginBtn();
});
