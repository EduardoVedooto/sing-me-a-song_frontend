/* eslint-disable padded-blocks */
const BASE_URL = 'http://localhost:3000';

const songA = {
  name: 'Ponto de Vista',
  youtubeLink: 'https://www.youtube.com/watch?v=1dmQmMUdMt8',
};

describe('/home - send a song', () => {
  it('should succesfully send a new song', () => {
    cy.visit(BASE_URL);

    cy.get('input[id="songName"]').type(songA.name);
    cy.get('input[id="songLink"]').type(songA.youtubeLink);
    cy.get('button[id="sendSong"]').click();

    cy.get('article').should('be.visible');

  });
});

// falta zerar banco antes e depois
