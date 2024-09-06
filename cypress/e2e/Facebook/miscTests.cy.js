describe('some tests',()=>{
    it('contains text',()=>{
        cy.visit("https://facebook.com/")
        cy.get('div[class="_8esl"]').should('contain.html','h2[class="_8eso"]')
    })
}
)