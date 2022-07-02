


describe('Understanding Write file i cypress', () => {


    it('Userstand writeFile', () => {

       cy.writeFile("cypress/fixtures/Module2/test.txt", "Thimmaraju\n")
       
    })

    it('Userstand writeFile -Append Data', () => {

        cy.writeFile("cypress/fixtures/Module2/test.txt", "Cypress Automation Trainer",{ flag: 'a+' })
        
     })

     it.skip('Userstand writeFile -Json file ', () => {

        cy.writeFile("cypress/fixtures/Module2/test4.json", { id: '8739', name: "Jane",email: "jane@example.com"})
        
     })


     it('Userstand Read file ', () => {

        cy.readFile("cypress/fixtures/Module2/test.txt").should('exist');
        cy.readFile("cypress/fixtures/Module2/test4.json").its('email').should("eq","jane@example.com")

        cy.readFile('cypress/fixtures/Module2/test.txt').should("contain","Thimmaraju")

        cy.readFile('cypress/fixtures/Module2/test.txt').should("eq","Thimmaraju\nCypress Automation Trainer")
        
     })

  
})


