describe('Toggle theme', () => {
    it('Change background when toggle', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.btn-toggle-theme').click()
    })
})