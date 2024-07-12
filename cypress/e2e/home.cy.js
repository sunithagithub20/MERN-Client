describe('Home Page test',()=>{
    it('Check The Input field',()=>{
        cy.visit('/')
        
            cy.get('input').type('Sunitha')
        cy.get('button').should('be.visible')
        cy.get('button.bg-blue-300').click();
        
        cy.contains('Welcome,Sunitha')
        cy.get('input').should('have.value','Sunitha')
        
    })
})