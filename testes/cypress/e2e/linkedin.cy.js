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
    cy.get(':nth-child(2) > .description__job-criteria-text').should('contain.text', "Full-time")
  })

  it('Teste - Buscando vaga estágio', () => {
    cy.linkedinVagas()
    cy.filterBR()
    cy.filterCheck(5)
    cy.selectFirst()
    cy.get(':nth-child(1) > .description__job-criteria-text').should('contain.text', "Internship")
  })

  it('Teste - Cadastro falho', () => {
    cy.linkedin()
    cy.joinIn()
    cy.enterCredentials('galileu@gmail.com', '123456')
    cy.enterName('Galileu', 'Galilei')
    cy.get('.toast__message').should('contain.text', 'Please enter a more secure password')
  })

  it('Teste - Login com username inválido', () => {
    cy.linkedin()
    cy.singIn()
    cy.enterLoginCredentials('skjdhvuirhbg', '1324587')
    cy.get('#error-for-username').should('contain.text', 'Please enter a valid username')
  })
  
})

// function criarUsuario(){

//   let horas = new Date().getHours().toString();
//   let minutos = new Date().getMinutes().toString();
//   let seg = new Date().getSeconds().toString()
//   let user = horas + minutos + seg + 'Id'
//   let senha = horas + minutos +seg + 'senha'
//   let userInfo = [user, senha]

//   cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
//   cy.get('.btn-link').click()
//   cy.get('#firstName').type(user)
//   cy.get('#Text1').type(user)
//   cy.get('#username').type(user)
//   cy.get('#password').type(senha)
//   cy.get('.btn-primary').click()
//   cy.get('.ng-binding').should('contain.text', 'Registration successful')

//   return userInfo
// }