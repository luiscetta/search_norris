describe('When the search is failed - input empty', () => {
    it('Visits the Search Norris and type a word with invalid characters', () => {
        cy.visit('https://search-norris.vercel.app/');

        cy.get('input').click();
        cy.get('input').type('nós');
        cy.get('button').contains('Search').click();
        cy.get('.no-results-container > div').scrollIntoView();
    });
});