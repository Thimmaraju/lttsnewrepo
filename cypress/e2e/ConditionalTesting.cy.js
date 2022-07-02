


describe('Understanding how to do conditional Testing', () => {


    it('Conditional Testing - If ', () => {

        cy.visit("https://www.wikipedia.org/")

        cy.title().should("eq", "Wikipedia")
        cy.wait(5000)
        cy.get('body').then(($body) => {

            if ($body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {

                cy.get('[data-jsl10n="portal.app-links.description"]').invoke('text').then((txt)=>{

                    cy.writeFile("cypress/fixtures/Module2/test5.json", { extarctedtext : txt})
                })

                cy.get('[data-jsl10n="wikivoyage.name"]').click();

            }
            else {

                cy.log("Element not found")
            }
        })

    })

    it('Conditional Testing - Else ', () => {

        cy.visit("https://www.wikipedia.org/")

        cy.title().should("eq", "Wikipedia")
        cy.wait(5000)
        cy.get('body').then(($body) => {

            if ($body.find('[data-jsl10n="Raju"]').length > 0) {

                cy.get('[data-jsl10n="wikivoyage.name"]').invoke('text').then((txt)=>{

                    cy.writeFile("cypress/fixtures/Module2/test5.json", { extarctedtext : txt})
                })

                cy.get('[data-jsl10n="wikivoyage.name"]').click();

            }
            else {

                cy.log("Element not found")
            }
        })

    })

})


