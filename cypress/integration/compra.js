describe('Automatizacion de una compra en sauce demo', () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it('Prueba automatizada de una compra', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.checkout('David', "Vega Santamaría", '20021');
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER');
    });
});