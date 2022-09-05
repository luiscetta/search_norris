describe('When the search is failed - input empty', () => {
    it('Visits the Search Norris and type a word with invalid characters', () => {
        cy.visit('http://localhost:3000');

        cy.get('input').click();
        cy.get('input').type('nós');
        cy.get('button').contains('Search').click();
        cy.get('.no-results-container > div').scrollIntoView();
    });
});