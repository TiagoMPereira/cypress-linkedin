// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Acessar página 
Cypress.Commands.add('linkedin', () => {
    cy.visit('https://www.linkedin.com/')
})

// Acessar página de vagas
Cypress.Commands.add('linkedinVagas', () => {
    cy.visit('https://www.linkedin.com/')
    cy.get(':nth-child(4) > .top-nav-link').click()
})

// Filtrar buscas pelo Brasil
Cypress.Commands.add('filterBR', () => {
    cy.get('.location-typeahead-input > .dismissable-input__input').clear().type("Brazil")
    cy.wait(1000)
    cy.get('[data-searchbar-type="JOBS"] > .base-search-bar__form > .base-search-bar__submit-btn').click()
})

// Filtrar buscas
Cypress.Commands.add('filterValue', (filter_index, keyword) => {
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .filter-button').click()
    cy.wait(1000)
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .collapsible-dropdown__list > .dismissable-input > .dismissable-input__input').type(keyword)
    cy.wait(1000)
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .collapsible-dropdown__list > .dismissable-input > .dismissable-input__input').type('{downArrow}')
    cy.wait(1000)
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .collapsible-dropdown__list > .dismissable-input > .dismissable-input__input').type('{enter}')
    cy.wait(1000)
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .collapsible-dropdown__list > .filter__submit-button').click()
    cy.wait(1000)
})

// Filtrar check button
Cypress.Commands.add('filterCheck', (filter_index) => {
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .filter-button').click()
    cy.wait(1000)
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .collapsible-dropdown__list > .filter-values-container > .filter-values-container__filter-values > :nth-child(1) > label').click()
    cy.wait(1000)
    cy.get(':nth-child('+filter_index+') > .dropdown-to-modal > .collapsible-dropdown > .collapsible-dropdown__list > .filter__submit-button').click()
    cy.wait(1000)
})

// Selecionar primeiro cartão
Cypress.Commands.add('selectFirst', () => {
    cy.get(':nth-child(1) > .base-card > .base-card__full-link').click()
    cy.wait(1000)
})

// Clicar na seção de cadastro 
Cypress.Commands.add('joinIn', () => {
    cy.get('.nav__button-tertiary').click()
    cy.wait(1000)
})

// Entrar com as credencias do cadastro
Cypress.Commands.add('enterCredentials', (email, password) => {
    cy.get('#email-or-phone').type(email)
    cy.wait(1000)
    cy.get('#password').type(password)
    cy.wait(1000)
    cy.get('#join-form-submit').click()
    cy.wait(1000)
})

// Entrar com o nome do cadastro
Cypress.Commands.add('enterName', (firstName, lastName) => {
    cy.get('#first-name').type(firstName)
    cy.wait(1000)
    cy.get('#last-name').type(lastName)
    cy.wait(1000)
    cy.get('#join-form-submit').click()
    cy.wait(1000)
})

// Clicar na seção de login
Cypress.Commands.add('singIn', () => {
    cy.get('.nav__button-secondary').click()
    cy.wait(1000)
})

// Entrando com as credencias de login
Cypress.Commands.add('enterLoginCredentials', (username, password) => {
    cy.get('#username').type(username)
    cy.wait(1000)
    cy.get('#password').type(password)
    cy.wait(1000)
    cy.get('.btn__primary--large').click()
    cy.wait(1000)
})
