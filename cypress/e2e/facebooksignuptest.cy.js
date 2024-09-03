import {faker} from "@faker-js/faker"
describe('template spec', () => {
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const pass=faker.internet.password();
const mail=faker.internet.email();
const strRand=(Math.floor(Math. random()*2+1)).toString();
//console.log(strRand);
  it('passes', () => {
    cy.visit('https://facebook.com/')
    cy.get('a[data-testid="open-registration-form-button"]').click();
    cy.get('input[name="firstname"]').type(fname)
    cy.get('input[name="lastname"]').type(lname)
    cy.get('input[name="reg_email__"]').type(mail)
    cy.get('input[name="reg_passwd__"').type(pass)
    cy.get('select[id="day"]').select(Math. floor(Math. random()*31) + 1 )
    cy.get('select[id="month"]').select(Math. floor(Math. random()*12)  )
    cy.get('select[id="year"]').select(Math.floor(Math. random()*(2024-1905) + 1))
    cy.get('input[type="radio"]').check(strRand);
    cy.get("button[name='websubmit']").click()
    //  cy.get('span[class="_5k_2 _5dba"] input[type="radio"]')
    //  .should('be.visible')
    //  .and('have.length',3)
    //  .then(($items) =>{
    //   return Cypress._.sampleSize($items.toArray,3)
    //  }) 
    //  .should('have.length',3)
    //  .click({multiple:false })
    //  cy.get('span input[type="radio"]:checked').should(
    //   'have.length',
    //   1
    //  )
   
    


  })
})
// function randombetween(min,max){
//   let step1=max-min+1;
//   let step2=Math.random*step1;
//   let result=Math.floor(step2)+min;
//   return result;
// }