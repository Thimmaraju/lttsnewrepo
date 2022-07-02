

describe('Understanding Working with check Boxes', () => {


    it('Working with Checkbox elements', () => {

        cy.visit("https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm");

        //cy.get('input[type="checkbox"]').eq(3).check()
        //cy.get('input[type="checkbox"]').first().check()
        //cy.get('input[type="checkbox"]').last().check()

        cy.get('input[type="checkbox"]').check(['Manual Tester', 'Automation Tester'])
        cy.wait(5000)
        //cy.get('input[type="checkbox"]').uncheck()
   
        cy.get('input[value="Automation Tester"]').should("be.checked")

        cy.wait(5000)
        cy.get('input[value="Automation Tester"]').uncheck().should("not.be.checked")

        cy.get('input[type="radio"]').eq(5).check()

        cy.get('input[value="Female"]').check().should("be.checked")

    })

})
