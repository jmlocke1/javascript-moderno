/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la muestra', () => {
    it('Campos nueva cita', () => {
        cy.visit('/');

        cy.get('[data-cy=mascota-input')
            .type('Hook');
        
        cy.get('[data-cy=propietario-input')
            .type('José Miguel');
        
        cy.get('[data-cy=telefono-input')
            .type('6666666');
        
        cy.get('[data-cy=fecha-input')
            .type('2026-08-26');
        
        cy.get('[data-cy=hora-input')
            .type('10:22:00');
        
        cy.get('[data-cy=sintomas-input')
            .type('Solamente quiere dormir');
        
        cy.get('[data-cy=submit-cita')
            .click();
        
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
        
        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
        
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');
    });
});