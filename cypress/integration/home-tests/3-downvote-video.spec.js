const BASE_URL = 'http://localhost:3000';
const API_URL = 'http://localhost:5000';

const songB = {
  name: 'Strange Dark House Mix',
  youtubeLink: 'https://www.youtube.com/watch?v=98a_uq0r7RQ',
};

beforeEach(() => {
  cy.resetDatabase();
});

afterEach(() => {
  cy.resetDatabase();
});

describe('/home - downvote a video', () => {
  it('should succesfully downvote in a video', () => {
    cy.visit(BASE_URL);

    cy.request('POST', `${API_URL}/recommendations`, songB).then((response) => {
      console.log(response.body, response.status);
    });

    cy.intercept('GET', '/recommendations').as('getRecommendations');
    cy.wait('@getRecommendations');

    cy.get('article').contains(songB.name)
      .should('be.visible')
      .parent()
      .find('div:nth-child(3)')
      .contains('0');

    cy.get('article').contains(songB.name)
      .should('be.visible')
      .parent()
      .find('div:nth-child(3)')
      .find('svg:nth-child(2)')
      .click();

    cy.get('article').contains(songB.name)
      .should('be.visible')
      .parent()
      .find('div:nth-child(3)')
      .contains('-1');
  });
});
