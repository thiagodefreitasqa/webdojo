describe('login', () => {
  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })
  it('Não Deve logar com senha invalida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente. ')
      .should('be.visible')
  })
  it('Não Deve logar com Email invalido', () => {
    cy.start()
    cy.submitLoginForm('404@webdojo.com', 'katana123')

    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente. ')
      .should('be.visible')
  })
  it('Não deve logar com Dominio Email errado', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo', 'katana123')

    cy.contains('button', 'Entrar').click()
    cy.contains('Hmm... esse email parece estar errado 🤔')
      .should('be.visible')
  })
})