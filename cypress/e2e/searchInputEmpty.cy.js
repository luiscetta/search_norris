describe('When the search is failed - input empty', () => {
    it('Visits the Search Norris and dont type any text', () => {
      cy.visit('https://search-norris.vercel.app/');
  
      cy.get('button').contains('Search').click();
      cy.contains('Your search must have at least 3 characters, please!').scrollIntoView();
    });
  });