describe('Cenários de teste para página inicial e página de vagas do Linkedin', () => {
  
  
  it('Teste - Buscando vaga do Inatel', () => {
    cy.linkedinVagas()
    cy.filterBR()
    cy.filterValue(2, "Inatel")
    cy.selectFirst()
    cy.get('.topcard__org-name-link').should('contain.text', "Instituto Nacional de Telecomunicações - Inatel")
  })
  
  it('Teste - Buscando vaga em São Paulo', () => {
    cy.linkedinVagas()
    cy.filterBR()
    cy.filterValue(3, "Sao Paulo")
    cy.selectFirst()
    cy.get(':nth-child(1) > .topcard__flavor--bullet').should('contain.text', "São Paulo")
  })
  
  it('Teste - Buscando vaga full time', () => {
    cy.linkedinVagas()
    cy.filterBR()
    cy.filterCheck(4)
    cy.selectFirst()
    cy.checkTextLanguages(':nth-child(2) > .description__job-criteria-text', "Tempo integral", "Full-time")
  })

  it('Teste - Buscando vaga estágio', () => {
    cy.linkedinVagas()
    cy.filterBR()
    cy.filterCheck(5)
    cy.selectFirst()
    cy.checkTextLanguages(':nth-child(1) > .description__job-criteria-text', "Estágio", "Internship")
  })

  it('Teste - Cadastro falho', () => {
    cy.linkedin()
    cy.joinIn()
    cy.enterCredentials('galileu@gmail.com', '123456')
    cy.enterName('Galileu', 'Galilei')
    cy.checkTextLanguages('.toast__message', 'Insira uma senha com um nível maior de segurança.', "Please enter a more secure password")
  })

  it('Teste - Login com username inválido', () => {
    cy.linkedin()
    cy.singIn()
    cy.enterLoginCredentials('skjdhvuirhbg', '1324587')
    cy.checkTextLanguages('#error-for-username', "'Insira um nome de usuário válido", "Please enter a valid username")
  })
  
})
