import {faker} from "@faker-js/faker"
describe('Signup TestSuite', () => {
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const pass=faker.internet.password();
const mail=faker.internet.email();
const strRand=(Math.floor(Math. random()*2+1)).toString();
//console.log(strRand);
  it('passes', () => {
    cy.visit('https://facebook.com/')
    cy.get('a[data-testid="open-registration-form-button"]').click();
    cy.get('input[name="firstname"]').should('be.empty').type(fname)
    cy.get('input[name="lastname"]').type(lname)
    cy.get('input[name="reg_email__"]').type(mail)
    cy.get('input[name="reg_passwd__"').type(pass)
    cy.get('select[id="day"]').select(Math. floor(Math. random()*31) + 1 )
    cy.get('select[id="month"]').select(Math. floor(Math. random()*12)  )
    cy.get('select[id="year"]').select(Math.floor(Math. random()*(2024-1905) + 1))
    cy.get('input[type="radio"]').check(strRand);
    cy.get("div[class='_58mo']").contains("There was an error with your registration. Please try registering again.").should('not.be')

    cy.get("button[name='websubmit']").click()
    
   
    


  })
   it('Fails to fill all fields form data',()=>{
     cy.visit('https://facebook.com/')
     cy.get('a[data-testid="open-registration-form-button"]').click();
     cy.get('input[name="firstname"]').type(fname)
     cy.get('input[name="lastname"]').type(lname)
     cy.get('input[name="reg_email__"]').type(mail)
     cy.get('input[name="reg_passwd__"').type(pass)
     cy.get('select[id="day"]').select(Math. floor(Math. random()*31) + 1 )
     cy.get('select[id="month"]').select(Math. floor(Math. random()*12)  )
     cy.get('select[id="year"]').select(Math.floor(Math. random()*(2024-1905) + 1))
     //cy.get('input[type="radio"]').check(strRand);
     cy.get("button[name='websubmit']").click()

   })
   it('Fails to give appropriate data',()=>{
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
   })
   it('Fails, because the fields are blank',()=>{
     cy.visit('https://facebook.com/')
     cy.get('a[data-testid="open-registration-form-button"]').click();
     cy.get("button[name='websubmit']").should('be.visible').click()
   })
   it('Fails, because it didnt submit the data',()=>{
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
   })
   it('fails because it tries to click on signup without clicking create account',()=>{
     cy.visit('https://facebook.com/')
     cy.get("button[name='websubmit']").click()

   })
  it("Fails because of re-Register",()=>{
    cy.visit('https://facebook.com/')
    cy.get('a[data-testid="open-registration-form-button"]').click();
    cy.get('input[name="firstname"]').type("Ally")
    cy.get('input[name="lastname"]').type("Smitham")
    cy.get('input[name="reg_email__"]').type("Simeon_Mayert70@hotmail.com")
    cy.get('input[name="reg_passwd__"').type("gfKd4s7jukEmjYk")
    cy.get('select[id="day"]').select(21)
    cy.get('select[id="month"]').select(3 )
    cy.get('select[id="year"]').select(68)
    cy.get('input[type="radio"]').check("2");
    cy.get("button[name='websubmit']").click()
    cy.get("div[class='_58mo']").contains("There was an error with your registration. Please try registering again.").should('be.visible')
  })
  
})
