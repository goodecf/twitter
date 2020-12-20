describe('Open signup modal', () => {
  it('Opens', () => {
    cy.visit('localhost:3000/');

    cy.contains('Sign up').click()
    cy.contains('Create your account');
  });

  it('Can go to next page', () => {
    cy.visit('localhost:3000/');

    cy.contains('Sign up').click()
    cy.contains('Create your account');

    cy.get('[data-cy=name]').type('Hello');
    cy.get('[data-cy=email]').type('hel@lo.com');
    cy.get('[data-cy=month]').click();
    cy.get('.visible > :nth-child(3) > .text').click();
    cy.get('[data-cy=day]').click();
    cy.get('.visible > :nth-child(3) > .text').click();
    cy.get('[data-cy=year]').click();
    cy.get('.visible > :nth-child(3) > .text').click();
    cy.get('[data-cy=next').click();
    cy.contains('Part two.');
  });
});