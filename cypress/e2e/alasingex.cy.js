

describe('Understanding Aliasing', () => {


    it('Userstand Alias in cypress', () => {

        cy.visit('https://bit.ly/3vswFBe')
        cy.get('input[type="checkbox"]').as("checkboxes").check()

        cy.get('@checkboxes')
        
        .each(checkbox => {

            expect(checkbox[0].checked).to.equal(true)
        })

    })

})


// `"text+"raju""`
// 'text'
// `text`