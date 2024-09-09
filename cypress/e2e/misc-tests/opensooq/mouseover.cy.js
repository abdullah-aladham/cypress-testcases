describe("mouseover Testsuite",()=>{
    it('pases',()=>{
        cy.visit('https://ps.opensooq.com/ar')
        // cy.get('[data-id="realEstates"] > .relative').trigger('mouseover')
        cy.get("a[href='/ar/عقارات']").invoke("show")
        cy.get('body > div:nth-child(4) > header:nth-child(4) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2)').should('not.be.visible').invoke('show')
    })
})