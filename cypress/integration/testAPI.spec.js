describe('API Testing', () => {

    it('GET Method', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.null
            expect(response.body).to.have.length(100)
        })
    })

    it('POST Method', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'nghia',
            body: 'nghia ne',
            userId: 1
        }).its('body').should('include', { title: 'nghia' })
    })

    it('PUT Method', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            title: 'nghia update',
            userId: 2
        }).its('body').should('include', { title: 'nghia update' })
    })

    it('DELETE Method', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    })

})