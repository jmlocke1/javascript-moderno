/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('https://javascript-moderno.test/52-Testing-Cypress/');

        cy.get('[data-cy=mascota-input')
            .type('Hook');
        
        

    });
});