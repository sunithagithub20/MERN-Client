//this is where we will write e2e test
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')  //to visit a url
        cy.contains('Welcome')
        cy.contains('Register')
        cy.contains('Login')
    })
})