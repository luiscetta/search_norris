
describe('When the search is successful', () => {
    it('Visits the Search Norris and click on the Feeling Lucky Button', () => {
        cy.visit('http://localhost:3000');

        cy.get('button').contains("I'm feeling lucky!").click();
    });
});
