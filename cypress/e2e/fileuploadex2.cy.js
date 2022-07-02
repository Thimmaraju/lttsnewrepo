


describe('Uploading file automation  example 2', () => {


    it('Userstand Upload file', () => {

       cy.visit("https://the-internet.herokuapp.com/upload")

       cy.get('#file-upload').attachFile("Module2/test.txt");

       cy.get('#file-submit').click();

      cy.get("#uploaded-files").contains("test.txt")

    })

    it('Userstanding  Download file ', () => {

        cy.downloadFile("https://www.thesprucepets.com/thmb/JPj64QXhXciiXesjdQ_4liIKJD4=/4224x3168/smart/filters:no_upscale()/pet-parrot-on-human-hand-1022424278-5c3ded0ac9e77c00016e6e2b.jpg","Raju/downloads", "image.jpg" )
         
      })
 

})


