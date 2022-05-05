const BASE_URL = "http://localhost:3000";

describe("/home - upvote a video", () => {
  it("should succesfully upvote in a video", () => {
    cy.visit(BASE_URL);
    cy.intercept('GET', '/recommendations').as('getRecommendations');
    cy.wait('@getRecommendations');
    
    /*
    consigo interceptar, mas não to sabendo o que
    esperar renderizar pra somente aí
    poder clicar no upvote
    */
    cy.get('[id="reactPlayer"]').should('be.visible');
    cy.wait(750);
    cy.get('[id="upvoteArrow"]').click();
    
  });
});