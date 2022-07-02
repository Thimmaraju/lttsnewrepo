


describe('Drag and Drop Automation ', () => {


    it('Userstand drag method', () => {

       cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop")

      cy.get("#menu-fried-chicken").drag("#plate")

      cy.get("#menu-hamburger").drag("#plate-items")

     const dataTransfer = new DataTransfer()

     cy.get("#menu-ice-cream").trigger('dragstart',{
        dataTransfer
     })

     cy.get("#plate-items").trigger('drop',{
        dataTransfer
     })

    })

})


