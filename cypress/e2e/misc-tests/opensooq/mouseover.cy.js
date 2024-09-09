describe("mouseover Testsuite",()=>{
    it('pases',()=>{
        cy.visit('https://ps.opensooq.com/ar');
        // cy.get('[data-id="realEstates"] > .relative').trigger('mouseover')
        cy.get('body > div:nth-child(4) > header:nth-child(4) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(2)>a[href="/ar/عقارات"]').realHover();
        //cy.get('li[data-id="realEstates"]').trigger('mouseover')
        // cy.get('body > div:nth-child(4) > header:nth-child(4) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2)').should('not.be.visible').invoke('show')
    })
})