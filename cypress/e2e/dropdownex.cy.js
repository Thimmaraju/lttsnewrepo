

describe('Working with Dropdown element ', () => {


    it('Userstand dropdown', () => {

        cy.visit('https://register.rediff.com/register/register.php');
        
        //Select with Text
        //cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)").select("AUG")

        // Select with Value

        //cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)").select("10")

        // Select by Index

        //Index is always with 0
        cy.get("#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)").select(7).should("have.value", "07")


        cy.get("#div_city > table > tbody > tr:nth-child(1) > td:nth-child(3) > select").select("Chennai")
    })

})


