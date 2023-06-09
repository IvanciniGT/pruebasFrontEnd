describe('Componente o pantalla que quiero probar', () => {
  it('Carga de la pantalla', () => {

    cy.visit('https://katalon-demo-cura.herokuapp.com/') // AQUI ES DONDE USAMOS REALMENTE CYPRESS
    // Que estamos probando aqui?
//    cy.get("a[id=btn-make-appointment]").click()  // Si en lugar de un <A>, se decide en el futuro usar un BUTTON
//    cy.get("[id=btn-make-appointment]").click() // MEJOR OPCION
    cy.get("#btn-make-appointment").click()  // MEJOR OPCION
//    cy.contains("Make Appointment").click()  // Si cambia el texto.... falla

    cy.get("#txt-password").type("ThisIsNotAPassword")
    cy.get("#txt-username").type("John Doe2")
    cy.get("#btn-login").click()  
// <p class="lead text-danger">Login failed! Please ensure the username and password are valid.</p>
// ^^^AUTOMATIZAR TRABAJOS EN EL NAVEGADOR
// PRUEBA !
    cy.get("p.text-danger").should('have.text', 'Login failed! Please ensure the username and password are valid.')
    cy.get("p.text-danger").should( ( parrafo )=> {
      expect(parrafo.text()).equal('Login failed! Please ensure the username and password are valid.')
    })
    })
})