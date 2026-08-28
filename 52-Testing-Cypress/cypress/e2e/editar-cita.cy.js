/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la edita', () => {
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
        
        cy.get('[data-cy=alerta0]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
        
        cy.get('[data-cy=alerta0]')
            .should('have.class', 'alert-success');
        
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');
    });

    it('Campos segunda cita', () => {

        cy.get('[data-cy=mascota-input')
            .type('Lucky');
        
        cy.get('[data-cy=propietario-input')
            .type('Paco Porras');
        
        cy.get('[data-cy=telefono-input')
            .type('6666667');
        
        cy.get('[data-cy=fecha-input')
            .type('2026-08-26');
        
        cy.get('[data-cy=hora-input')
            .type('11:15:00');
        
        cy.get('[data-cy=sintomas-input')
            .type('Se rasca mucho');
        
        cy.get('[data-cy=submit-cita')
            .click();
        
        cy.get('[data-cy=alerta1]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
        
        cy.get('[data-cy=alerta1]')
            .should('have.class', 'alert-success');
        
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');
    });

    it('Edita la cita', () => {
        cy.get('[data-cy=btn-editar0]').click();

        cy.get('[data-cy=mascota-input]')
            .clear()
            .type('Nuevo Hook');

        cy.get('[data-cy=submit-cita')
            .click();
        
        cy.get('[data-cy=alerta2]')
            .invoke('text')
            .should('equal', 'Editado Correctamente');
    });
});