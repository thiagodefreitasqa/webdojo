describe('Formulario Consultoria', () => {

    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')

        cy.get("#name").type('Thiago Freitas')
        cy.get('input[placeholder="Digite seu email"]')
            .type('thiagofreitasqatest@gmail.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 99192-0055')
            .should('have.value', '(11) 99192-0055')

        //Outras formas de preencher os campos
        //cy.get('input[placeholder="Digite seu nome completo"]').type('Thiago Freitas')
        //cy.get('#email').type('thiagofreitasqatest@gmail.com')
        //cy.get('input[type="email"]').type('thiagofreitasqatest@gmail.com')

        // cy.get('#document').type('741.852.963-85')

    })

})