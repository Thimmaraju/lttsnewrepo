import register from "../fixtures/register.json"

describe('Understanding fixtures concept', function () {


    it('Working with test data example', function () {

        cy.visit("https://shop.demoqa.com/my-account/");

        cy.wait(5000)

        cy.get("#reg_username").type(register.username)
        cy.wait(5000)
        cy.get("#reg_email").type(register.emailaddress)
        cy.wait(5000)
        cy.get("#reg_password").type(register.password)
        cy.wait(5000)
        cy.get(".woocommerce-Button").should('have.attr', "disabled", "disabled")
        cy.wait(5000)
        cy.get("#reg_password").type(register.newpassword)
        cy.get(".woocommerce-Button").click()

        cy.get("#username").should("have.value", register.username)

    })

})