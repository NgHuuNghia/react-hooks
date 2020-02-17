describe('Toggle theme', () => {
    it('Change background when toggle', () => {
        cy.visit('/')
        cy.get('[data-cy=navbar]').should(($el) => {
            expect($el).to.have.css('background-color', 'rgb(221, 221, 221)')

        })
        cy.get('[data-cy=btnToggleTheme]').click()
        cy.get('[data-cy=navbar]').should(($el) => {
            expect($el).to.have.css('background-color', 'rgb(51, 51, 51)')

        })
    })
})