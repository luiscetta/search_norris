
describe('When the search is successful', () => {
    it('Visits the Search Norris and click on the Feeling Lucky Button', () => {
        cy.visit('https://search-norris.vercel.app/');

        cy.get('button').contains("I'm feeling lucky!").click();
    });
});
