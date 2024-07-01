/// <reference types="cypress" />

export class home {
  elements = {
    searchTxt: () => cy.get("#place"),
    btnSearch: () => cy.get("button").contains("Find"),
    title: () => cy.get("h1"),
    description: () => cy.get("p"),
    inputLatitude: (lat: string) => cy.get("#lat").contains(lat),
    inputlongitude: (long: string) => cy.get("#lat").contains(long),
    latlongCoordinates: () => cy.get("#latlngspan"),
    username: () => cy.get("#email"),
    password: () => cy.get("#password1"),
    loginbuttonmenu: () => cy.get("a").contains("User Login").click(),
    loginbutton: () => cy.get("button").contains("Login").click(),
    homebutton: ()=> cy.get("a[title='Lat Long Finder']").click(),
  };

  loginWithTestUser(email:string,pwd:string){
    this.elements.loginbuttonmenu();
    this.elements.username().type(email);
    this.elements.password().type(pwd);
    this.elements.loginbutton();
    this.elements.homebutton();
  }
  typeOnsearchButton(place: string) {
    this.elements.searchTxt().type(place);
  }

  searchOnPage() {
    this.elements.btnSearch().click();
  }

  findElementsAfterSearch(lat: string, long: string) {
    this.elements.latlongCoordinates().contains(`${lat}, ${long}`);
  }

  findElementsOnLoad(name: string, description: string) {
    this.elements.title().contains(name);
    this.elements.description().contains(description);
  }

  login(page: string) {
    cy.visit(page);
  }
}
