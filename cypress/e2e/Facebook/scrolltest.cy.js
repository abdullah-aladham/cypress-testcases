describe('Scroll-TestSuite',()=>{
    it('passes',()=>{
        cy.visit("https://www.dooz.ps/")
       // cy.get('div[class="_95ke _8opy"').scrollTo(0,300)
       cy.scrollTo(0,0)
    })
//    it('mouseover test',()=>{

//    })
})