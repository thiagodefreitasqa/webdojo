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
        //o formato a seguir simula o xPath que não existe nativamente em cypress, ao menos sem extensões.
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        // https://www.4devs.com.br/gerador_de_cpf
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('15148932074')
            .should('have.value', '151.489.320-74')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')

        })
        //criar pdfs para teste lorempdf.com
        cy.get('input[type="file"')
            .selectFile('./cypress/fixtures/document.pdf', { force: true })
        //criar strings de teste https://loremipsum.io/

        cy.get('textArea[placeholder="Descreva mais detalhes sobre sua necessidade"')
            .type('Lorem ipsum dolor sit amet, consectetur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')

        const techs = [
            'Cypress',
            'RobotFramework',
            'Selenium',
        ]
        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            .should('be.visible')

        cy.contains('button', 'Fechar')
            .should('be.visible')
            .click()

        //Outras formas de preencher os campos
        //cy.get('input[placeholder="Digite seu nome completo"]').type('Thiago Freitas')
        //cy.get('#email').type('thiagofreitasqatest@gmail.com')
        //cy.get('input[type="email"]').type('thiagofreitasqatest@gmail.com')

        // cy.get('#document').type('741.852.963-85')

    })

})