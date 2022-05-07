const BASE_URL = 'http://localhost:3000';

const songB = {
  name: 'Foo Fighters: The Pretender',
  youtubeLink: 'https://www.youtube.com/watch?v=SBjQ9tuuTJQ',
};

describe('/home - upvote a video', () => {
  it('should succesfully upvote in a video', () => {
    cy.visit(BASE_URL);

    /*
    cy.request('POST', 'http://localhost:5000/recommendations', songB).then((response) => {
      console.log(response);
    });
    */

    cy.intercept('GET', '/recommendations').as('getRecommendations');
    cy.wait('@getRecommendations');

    cy.get('article').contains(songB.name).should('be.visible');

    cy.get('article').contains(songB.name)
      .parent()
      .find('div:nth-child(3)')
      .find('svg:nth-child(1)')
      .click();

    // cy.get('article div:nth-child(3) svg:nth-child(1)').click();
  });
});

// add 2 vídeos e testar up/down num só, apagar depois tbm
