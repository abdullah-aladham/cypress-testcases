// // const { delay } = require("cypress/types/bluebird");

// describe('Dynamic select',()=>{
//     it('pases',()=>{
//         cy.visit("https://www.google.com/travel/flights");
//          cy.get("input[aria-label='Where from?']").should('be.visible').click().clear()
//         //  .type("new",{delay:200});
//         cy.get("input[aria-label='Where from? ']").type("new")
//         cy.get(".DFGgtd li:nth-child(3)").each(($el, index, $list)=>{
//             cy.log($el.text())
        
//             console.log ($el.text())
//             if($el.text()==='John F. Kennedy International AirportJFK20 km')
//               cy.wrap($el).click()
//            // alert('reached')
//         })
//          //cy.get("input[aria-label='Where from?']")
//         //   cy.get("input[placeholder='From?']").type('new',{delay:200});
//         //  cy.get
//     })
// })
describe('just some checkboxes',()=>{
    it('checks all boxes',()=>{
        cy.visit("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox")
    })
})