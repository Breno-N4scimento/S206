// cypress/integration/the-internet.spec.js

describe('Testes E2E - The Internet', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com');
    });

    it('Acessar a Página Principal', () => {
        cy.title().should('eq', 'The Internet');
    });

    it('Acessar a Página de Login', () => {
        cy.contains('Form Authentication').click();
        cy.title().should('eq', 'The Internet');
    });

    it('Login com Credenciais Corretas', () => {
        cy.contains('Form Authentication').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.contains('You logged into a secure area!').should('be.visible');
    });

    it('Login com Credenciais Incorretas', () => {
        cy.contains('Form Authentication').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('wrongPassword!');
        cy.get('.radius').click();
        cy.contains('Your username is invalid!').should('be.visible');
    });

    it('Navegar para a Página de Tabelas', () => {
        cy.contains('Sortable Data Tables').click();
        cy.title().should('eq', 'The Internet');
    });

    it('Busca por um nome específico na tabela', () => {
        const nomeParaBuscar = 'Tiger Nixon'; // Nome a ser buscado

        // Aguarda o campo de busca estar disponível e digita o nome
        cy.get('#task-table_filter input', { timeout: 10000 }).should('be.visible').type(nomeParaBuscar);

        // Verifica se o nome aparece na tabela
        cy.get('tbody tr').should('have.length', 1); // Espera que apenas uma linha seja exibida
        cy.get('tbody tr').first().contains(nomeParaBuscar); // Verifica se a linha contém o nome buscado
    });
});
