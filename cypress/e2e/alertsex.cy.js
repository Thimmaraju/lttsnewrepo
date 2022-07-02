
describe('Working with Alerts', () => {


    it('Automate Alets  in web aplication', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains("Click for JS Alert").click();
        cy.on("window:alert", (text)=>{

            expect(text).equal("I am a JS Alert")
        })
    })

    it('Automate confirm Alert in web aplication - Cancel ', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains("Click for JS Confirm").click();
        cy.on("window:confirm", ()=>{

            return false
        })
    })

    it('Automate confirm Alert in web aplication - Okay ', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains("Click for JS Confirm").click();
        cy.on("window:confirm", ()=>{

            return true
        })
    })


    it('Automate Prompt Alert in web aplication - Okay ', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.window().then( (win)=>{

            cy.stub(win, "prompt").returns("Raju")
            cy.contains("Click for JS Prompt").click();
        })
    })

    it('Automate Prompt Alert in web aplication - Cancel Prompt ', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.window().then( (win)=>{

            cy.stub(win, "prompt").callsFake(()=> null)
            cy.contains("Click for JS Prompt").click();
        })
    })
})