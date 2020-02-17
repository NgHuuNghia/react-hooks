describe('Book action', () => {
    before(function () {
        cy.SayHello()
    })

    it('Add new Book', () => {
        cy.visit('/')
        cy.get('[data-cy=input]').type('book 1').type('{enter}')
        cy.get('[data-cy=book-list]').then((books) => {
            cy.get('li').contains('book 1')
            cy.log('add success book 1!')

        })
    })

    it('Delete a book', () => {

        cy.get('[data-cy=book-list]').then((books) => {
            cy.get('li').contains('book 1').click()
            cy.get('li').contains('book 1').not()
            cy.log('delete success book 1!')
        })
    })
})
