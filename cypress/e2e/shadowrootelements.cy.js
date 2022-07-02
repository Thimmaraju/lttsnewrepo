///<reference types="cypress"/>

describe('Automation - Working with Shadowroot elements', function () {

    it('Cypress Test Case - Shadow', function () {
  
      cy.visit('https://books-pwakit.appspot.com//');

     // cy.xpath("//input[@id='input']").type('Raju');

     cy.get('book-app').shadow()
                .find('app-header')
                .find('.toolbar-bottom')
                .find('book-input-decorator')
                .find('#input')
               .type("Raju").click();
               cy.url().should('contains',"/explore?q=Raju")

    })

  })