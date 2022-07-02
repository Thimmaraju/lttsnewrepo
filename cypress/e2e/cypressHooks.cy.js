
describe('Understanding Cypress Hooks', () => {

    before( function (){

        cy.log(" This will run Before All")
    })

    after( function (){

        cy.log(" This will run After  All")
    })
    
    beforeEach( function (){

        cy.log(" This will before each test case")
    })


    afterEach( function (){

        cy.log(" This will After each test case")
    })

    it.only('Test case 1', () => {

        cy.visit("https://www.google.com/`")
        
        cy.log("This is first test case")
     
    })
  
    it('Test case 2', () => {
  
        cy.log("This is second test case")
    })
  
    it.skip('Test case 3', () => {
        
        cy.log("This is third test case")
     
    })
  
    it.skip('Test case 4', () => {
  
        cy.log("This is 4th test case")
    })
  
  
  })
  
  
  
  //Decribe - Test Suite = Context 
  //It - Test Case - Specify