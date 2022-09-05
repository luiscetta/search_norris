
describe('When the search is successful', () => {
  it('Visits the Search Norris and searching for a word or text', () => {
    cy.visit('http://localhost:3000');

    cy.get('input').click();
    cy.get('input').type("i don't");
    cy.get('button').contains('Search').click();
  });
});
