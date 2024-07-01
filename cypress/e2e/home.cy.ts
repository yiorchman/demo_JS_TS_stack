/// <reference types="cypress" />

import { home } from "../pages/home.page";
const homePages = new home();

let testdata:any;
beforeEach(function () {
  homePages.login(testdata.page);
});

describe("Happy Path Tests", () => {
  before(() => {
    cy.fixture("testdata").then((fData) => {
      testdata = fData;
    });
  });

  it("Login with user for testing", () => {
    homePages.loginWithTestUser(testdata.email, testdata.pwd);
  });

  it("Happy Path: Check the elements of the page", () => {
    homePages.findElementsOnLoad(testdata.title, testdata.description);
  });

  it("Happy Path: Find a place ussing the find button", () => {
    homePages.loginWithTestUser(testdata.email, testdata.pwd);
    homePages.typeOnsearchButton(testdata.place.london.name);
    homePages.searchOnPage();
    homePages.findElementsAfterSearch(
      testdata.place.naranjo.latitude,
      testdata.place.naranjo.longitude
    );
  });


});
