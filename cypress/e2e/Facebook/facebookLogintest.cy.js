describe('facebook-login-testsuite',()=>{
    it('pases',()=>{
        cy.visit("https://facebook.com")
        cy.get("input[name='email']").type("Simeon_Mayert70@hotmail.com")
        cy.get("input[name='pass']").type("gfKd4s7jukEmjYk")
        cy.get("button[name='login']").click()

    })//fails here because of the fake data 
    it('fails',()=>{
        cy.visit("https://facebook.com")
        cy.get("input[name='email']").type("Simeon_Mayert70@hotmail.com")
        cy.get("input[name='pass']").type("54544851")
        cy.get("button[name='login']").click()
    })//and fails here because of invalid credentials 
    it('fails because of blank fields',()=>{
        cy.visit("https://facebook.com")
        cy.get("button[name='login']").click()
    })
})