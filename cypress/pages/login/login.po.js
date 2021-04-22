const emailField = '#user_email_field',
      passwordField = '#user_password_field',
      loginBtn = '#login_button';

class LoginPo {
  
  static fillEmailField(email) {
    cy.get(emailField)
      .type(email);
  }

  static fillPasswordField(password) {
    cy.get(passwordField)
        .type(password);
  }

  static clickLoginBtn() {
    cy.get(loginBtn)
        .click();
  }
}

export default LoginPo;
