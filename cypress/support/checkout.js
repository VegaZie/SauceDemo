Cypress.Commands.add('checkout', (firtsname, lastname, zipCode)=>{
    cy.fixture('checkout').then((check)=>{
        cy.get(check.firstName).type(firtsname);
        cy.get(check.lastName).type(lastname)
        cy.get(check.zipCode).type(zipCode)
        cy.get(check.btnContinue).click();
    })
})