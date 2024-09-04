describe('Login-TestSuite',()=>{
    it('Pases',()=>{
        cy.visit("https://practice.expandtesting.com/login")
        cy.get("input[id='username']").type("practice")
        cy.get("input[id='password']").type("SuperSecretPassword!")
        cy.get("button[type='submit']").click();
    })
    it('fails,Pass is incorrect',()=>{
        cy.visit("https://practice.expandtesting.com/login")
        cy.get("input[id='username']").type("practice")
        cy.get("input[id='password']").type("SuperSecretPassword")
        cy.get("button[type='submit']").click();
    })
    it("Fails , username is incorrect",()=>{
        cy.visit("https://practice.expandtesting.com/login")
        cy.get("input[id='username']").type("practic")
        cy.get("input[id='password']").type("SuperSecretPassword!")
        cy.get("button[type='submit']").click();
    })
    it('Fails, invalid credentials',() => {
        cy.visit("https://practice.expandtesting.com/login")
        cy.get("input[id='username']").type("practic")
        cy.get("input[id='password']").type("SuperSecretPassword")
        cy.get("button[type='submit']").click();
    })

})