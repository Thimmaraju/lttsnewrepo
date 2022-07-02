
const availablefixtures = [
    {
        "name": "register",
        "context": "1"
    },

    {
        "name": "twofixture",
        "context": "2"
    },

    {
        "name": "threefixture",
        "context": "3"
    }
]

describe('Understanding fixtures concept', function () {

    availablefixtures.forEach((afixture) => {

        describe(afixture.context, () => {

            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })


            it('Working with test data example', function () {

                cy.visit("https://shop.demoqa.com/my-account/");

                cy.wait(5000)

                cy.get("#reg_username").type(this.data.username)
                cy.wait(5000)
                cy.get("#reg_email").type(this.data.emailaddress)
                cy.wait(5000)
                cy.get("#reg_password").type(this.data.password)
                cy.wait(5000)
                cy.get(".woocommerce-Button").should('have.attr', "disabled", "disabled")
                cy.wait(5000)
                cy.get("#reg_password").type(this.data.newpassword)
                cy.get(".woocommerce-Button").click()

                cy.get("#username").should("have.value", this.data.username)

            })

        })

    })
})