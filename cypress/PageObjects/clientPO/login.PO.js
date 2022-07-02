class loginPage{


    loginwithCreds(usename, password){

        cy.enterText(this.usernameInput(), usename)
        //cy.xpath(this.usernameInput()).type(usename)
        //cy.get(this.passwordInput()).type(password)
        cy.enterText(this.passwordInput(), password)

        cy.clickonelement(this.loginBtn())
       // cy.get(this.loginBtn()).click();
    }

    usernameInput(){

        return '//*[@id="txtUsername"]'
    }

    passwordInput(){

        return "#txtPassword"
    }

    loginBtn(){

        return "#btnLogin"
    }

    errorMessage(){

        return "#spanMessage"
    }
}

export default loginPage;