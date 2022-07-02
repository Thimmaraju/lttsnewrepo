describe('Understanding fixtures concept', function () {

    before(function () {

        cy.fixture("register").then(function (data) {
            this.data = data;
        })
    })

    it('Working with test data example', function () {

        cy.visit("https://shop.demoqa.com/my-account/");

        cy.wait(5000)

        cy.enterText("#reg_username", this.data.username, {delay:0})
        //cy.get("#reg_username").type(this.data.username)
        cy.wait(5000)
        cy.enterText("#reg_email", this.data.emailaddress)
        //cy.get("#reg_email").type(this.data.emailaddress)
        cy.wait(5000)
        cy.enterText("#reg_password",this.data.password)

        //cy.get("#reg_password").type(this.data.password)
        cy.wait(5000)

        cy.validateAttribute(".woocommerce-Button","disabled", "disabled")
        //cy.get(".woocommerce-Button").should('have.attr', "disabled", "disabled")

        //or 

        cy.get('.woocommerce-Button').should('be.disabled')

        cy.wait(5000)
        //cy.get("#reg_password").clear();
        cy.wait(5000)
        cy.get("#reg_password").clear().type(this.data.newpassword)
        cy.wait(10000)

        cy.clickonelement('//*[@value="Register"]')

        //cy.get(".woocommerce-Button").click()

        cy.get("#username").should("have.value", this.data.username)
        //or

        cy.get("#username").should('have.attr', "value", this.data.username)

    })

})