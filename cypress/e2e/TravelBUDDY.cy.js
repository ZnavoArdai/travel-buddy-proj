describe('empty spec', () => {

  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it("click sign up", () => {
    cy.get('.card-body > :nth-child(3)').click()
    cy.get('#inputnameSignup').type("znavo")
    cy.get('#inputLastnameSignup').type("ardai")
    cy.get('#inputPhotoSignup').type("https://images.unsplash.com/photo-1616156194103-ab9d45e33915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80")
    cy.get('#inputemailSignup').type("znavoardai@gmail.com")
    cy.get('#inputpasswordSignup').type("123456") 
    cy.get('#inputSecpasswordSignup').type("123456") 
    cy.get('.modal-footer > .btn-primary').click()
    cy.get('.modal-footer > .btn-primary').click()
    cy.get('.card-body > :nth-child(2)').click()
    cy.get('#inputname').type("znavo")
    cy.get('#inputemail').type("znavoardai@gmail.com")
    cy.get('#inputpassword').type("123456") 
    cy.get('#loginbtn').click()

  });

  it("check user component",()=>{
    cy.get('.text-light').contains("znavo");
    cy.get('#dis > :nth-child(1) > .container').should("have.css", { color: "#000000" });
    cy.get(':nth-child(1) > .container > .card-body > .d-flex > :nth-child(1)').contains("send massage");
    cy.get('#dis > :nth-child(1) > .container').should("exist");
    cy.get('.form-control').type("Demble")
    cy.get('.card-body > .d-flex > :nth-child(2)').click()
    cy.get('[href="/products"]').click()


  })

  it("check items component",()=>{
    cy.get(':nth-child(1) > .container > .card-body > :nth-child(2)').should("have.css", { color: "#000000" });
    cy.get('.row > :nth-child(1) > .container').should("exist");
    cy.get(':nth-child(8) > .container > .card-body > .btn').click()
    // cy.get('.form-control').type("backpack")
  })

  
  



})

