import loginPage from '../PageObjects/clientPO/login.PO'

const login = new loginPage()

describe('Validate Orange HRM Login Functionality', () => {

  beforeEach(function () {

    //cy.viewport("ipad-2", "landscape")
    cy.visit(Cypress.env("clientUrl"));

  })

  it('Validate Login with Valid credentials', () => {

    cy.login("Admin", "admin123")
    cy.url().should("include", "index.php/dashboard")
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/index.php/dgvndfkjg")

  })

  it('Validate Login with Invalid credentials', () => {

    cy.login("rhiut", "eyhfuyw")
    cy.get(login.errorMessage()).should("be.visible")

    
  })



})



//Decribe - Test Suite
//It - Test Case