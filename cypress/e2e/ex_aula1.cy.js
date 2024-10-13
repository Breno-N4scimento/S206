///<reference =cypress>

describe("Teste de criação, registro e login", () =>{
    it.skip('Teste criação usuario com sucesso',()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type("Breno")
        cy.get('#Text1').type("Nascimento")
        cy.get('#username').type("breno")
        cy.get('#password').type("jooj")
        cy.get('.btn-primary').click()  
        cy.get('.ng-binding').should("contain.text","Registration successfu")
     })
})

    it.skip('Teste criação usuario com sucesso',()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type("Breno")
        cy.get('#Text1').type("Nascimento")
        cy.get('#username').type("breno")
        cy.get('.btn-primary').should("be.disabled")  
     })

     it("Teste login com sucesso",()=>{
        let infos = criar_user()
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should("contain.text",infos[0])

        //EXERCICIO_AULA1
        cy.get('.ng-binding > a').click();
        cy.get('.btn').click();

        cy.get('#username').type(infos[0]);
        cy.get('#password').type(infos[1]);
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should("exist");  
    })


     function criar_user(){

        let hora = new Date().getHours().toString()
        let min = new Date().getMinutes().toString()
        let seg = new Date().getSeconds().toString()

        let id = hora+min+seg+"id"
        let senha = hora+min+seg+"senha"

        let infos =[id,senha]

        
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
        cy.get('.btn-link').click()
        cy.get('#firstName').type(id)
        cy.get('#Text1').type(id)
        cy.get('#username').type(id)
        cy.get('#password').type(senha)
        cy.get('.btn-primary').click()  
        cy.get('.ng-binding').should("contain.text","Registration successfu")
        return infos
         

     }