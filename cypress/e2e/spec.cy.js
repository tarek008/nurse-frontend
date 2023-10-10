describe("template spec", () => {
  it("TestFilters", () => {
    cy.visit("https://nurse-frontend-iota.vercel.app/");
    cy.viewport(1600, 1000);
    cy.wait(30000);
    cy.get('[data-testid="Nurses_Nav_Bar"]').click();
    cy.wait(4000);
    cy.get('[data-testid="Filter_Button"]').click();
    cy.wait(2000);
    cy.contains("div.v-list-item", "FirstName").click();
    cy.wait(2000);
    cy.get('[data-testid="Search"]', { timeout: 5000 }).type("Rossie");
    cy.wait(2000);
    cy.get('[data-testid="Search"]').type(
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}"
    );
    cy.wait(2000);
    cy.get('[data-testid="Filter_Button"]').click();
    cy.wait(2000);
    cy.contains("div.v-list-item", "LastName").click();
    cy.wait(2000);
    cy.get('[data-testid="Search"]', { timeout: 5000 }).type("Sanchez");
    cy.wait(2000);
    cy.get('[data-testid="Search"]').type(
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}"
    );
    cy.wait(2000);
    cy.get('[data-testid="Filter_Button"]').click();
    cy.wait(2000);
    cy.contains("div.v-list-item", "ZipCode").click();
    cy.wait(2000);
    cy.get('[data-testid="Search"]', { timeout: 5000 }).type("77907");
    cy.wait(2000);
    cy.get('[data-testid="Search"]').type(
      "{backspace}{backspace}{backspace}{backspace}{backspace}"
    );
    cy.wait(2000);
    cy.get('[data-testid="Filter_Button"]').click();
    cy.wait(2000);
    cy.contains("div.v-list-item", "All").click();
    cy.wait(2000);
    cy.get('[data-testid="Search"]', { timeout: 5000 }).type(
      "Pascale.Schneider-43@libheros.fr"
    );
    cy.wait(2000);
    cy.get('[data-testid="Search"]').type("{selectall}{backspace}");
    cy.wait(2000);
  });
});
