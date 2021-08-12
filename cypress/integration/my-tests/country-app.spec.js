/// <reference types="cypress" />

describe('Basic tests', () => {
    context('Elements exitence test', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
            cy.visit('http://localhost:3000/')
        })
        
        // Test 0
        it('Website link working', () => {
            cy.log('Website link working woohoo')
        })
    
        // Test 1
        it('Website name exists', () => {
            cy.get('[data-testid=nav-head]').should('exist')
        })
    
        // Test 2
        it('First loading then cards appear', () => {
            cy.get('[data-testid=loading]').should('exist')
            cy.get('[data-testid=card]', { timeout: 10 * 1000 }).should('exist')
            cy.get('[data-testid=loading]').should('not.exist')
        })
    
        // Test 3
        it('Search bar exists and works', () => {
            cy.get('[data-testid=card]', { timeout: 10 * 1000 }).should('exist')
            cy.get('[data-testid=search]').should('exist')
            .type('Mongolia')
            cy.get('[data-testid=card]', { timeout: 6 * 1000 })
            .first().then(() => {
                cy.contains('Mongolia').should('exist')
            })
        })
    
        // Test 4
        it('Filter exists and works', () => {
            cy.get('[data-testid=card]', { timeout: 10 * 1000 }).should('exist')
            cy.get('[data-testid=filter]')
            .realHover()
            cy.get('[data-testid=filter-options]').should('exist')
            .contains('Asia')
            .click()
            .trigger('mouseout')
            cy.contains('India').should('exist')
            cy.contains('China').should('exist')
            cy.contains('Sri Lanka').should('exist')
            cy.contains('Pakistan').should('exist')
            cy.contains('Bangladesh').should('exist')
            cy.contains('Afghanistan').should('exist')
            cy.contains('Hong Kong').should('exist')
            cy.contains('Indonesia').should('exist')
            cy.contains('Malaysia').should('exist')
        })
    
        // Test 5
        it('Dark theme and localStorage working', () => {
            cy.get('[data-testid=card]', { timeout: 10 * 1000 }).should('exist')
            cy.get('[data-testid=dark-mode]').should('exist')
            .click()
            // cy.get('[data-testid=App]').should('have.css', 'background-color', 'hsl(207, 26%, 17%)')
        })
    })

})