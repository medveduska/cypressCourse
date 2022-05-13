describe ('Learning cypress - tests', () => {

    const usr = Cypress.env('username')
    const psw = Cypress.env('password')

    beforeEach(() => {
        cy.visit('https://enterHomePage')
    })

    it('Successfull Login', ()=>{
        cy.get('#username').type(usr)
        cy.get('#password').type(psw)
        cy.contains('Login').click()
        cy.get('#profile').should('exist')
    })
    it('failed Login', ()=>{
        cy.get('#username').type(usr)
        cy.get('#password').type('WrongPassword')
        cy.contains('Login').click()
        cy.get('#profile').should('not.exist')
        cy.get('#msg.errors').should('have.text','Invalid credentials.')
    })
    it('Successfull Login and logout', ()=>{
        cy.get('#username').type(usr)
        cy.get('#password').type(psw)
        cy.contains('Login').click()
        cy.get('.logout-button').should('exist')
        cy.get('.logout-button').click()
        cy.get('#msg.success').should('exist')
    })
}) 