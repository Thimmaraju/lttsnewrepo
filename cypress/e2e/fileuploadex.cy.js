


describe('Uploading file automation ', () => {


    it('Userstand Upload file', () => {

       cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")

       cy.get('input[name="upfile"]').attachFile("Module2/test.txt");

       cy.get('input[value="Press"]').click();

    })

})


