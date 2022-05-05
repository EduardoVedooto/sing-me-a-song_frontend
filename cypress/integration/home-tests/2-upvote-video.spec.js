const BASE_URL = 'http://localhost:3000';

describe('/home - upvote a video', () => {
  it('should succesfully upvote in a video', () => {
    cy.visit(BASE_URL);
    cy.intercept('GET', '/recommendations').as('getRecommendations');
    cy.wait('@getRecommendations');

    cy.get('[id="reactPlayer"]').should('be.visible');
    // mudar modo de busca: id deve ser único na página

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(750);
    cy.get('[id="upvoteArrow"]').click();
  });
});

// add 2 vídeos e testar up/down num só, apagar depois tbm
