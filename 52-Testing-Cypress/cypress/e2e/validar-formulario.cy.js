/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('/');

        cy.get('[data-cy="formulario"]')
            .submit();
        
        
        // Seleccionar la alerta
        cy.get('[data-cy=alerta0]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        cy.get('[data-cy=alerta0]')
            .should('have.class', 'alert-danger');
    });
});