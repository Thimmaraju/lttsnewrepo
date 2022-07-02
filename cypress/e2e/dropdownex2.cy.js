

describe('Working with Dropdown element example 2', () => {


    it('Userstand dropdown', () => {

        Cypress.on("uncaught:exception",(err, runnable)=>{
            return false;
        })

        cy.visit('https://chercher.tech/practice/dropdowns');
        cy.get("#order-changed").select("Microsoft")
       
    })

})


