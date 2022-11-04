# 💻 cypress-linkedin
• Repositório contendo testes em cypress para a página inicial e de vagas do linkedin

# 🧪 Testes abordados
  • Buscando vaga do Inatel
  
  • Buscando vaga em São Paulo
  
  • Buscando vaga full time

  • Buscando vaga estágio

  • Cadastro falho

  • Login com username inválido

# 🔨 Como rodar os testes
  • Abrir o GIT Bash na pasta `cypress-linkedin/testes`
  
  • Executar o comando `./node_modules/.bin/cypress open`
  
  • Clicar no código `testes/linkedin.cy.js`
  
# 📜 Como gerar o relatório
  • No terminal (utilizei no VS Code), utilizar o comando `./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' `
  
  • Usar o comando `npm i --save-dev cypress-mochawesome-reporter`. Obs: o arquivo `cypress.json` já está configurado.
  
  • Utilizar novamente o comando `./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' ` para gerar o relatório.
  