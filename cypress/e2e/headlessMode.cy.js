describe('testing button', () => {
  it('should say "Button Pressed!" when clicked', () => {
    cy.visit('baseUrl')
    cy.get('button').click()
  })
})

describe('button changes color when pressed', () => {
  it('should switch color to red when pressed', () => {
    cy.visit('baseUrl')
    cy.get('button').click()
    cy.expect('have.attr', 'fill', '#ff0000')
  })
})