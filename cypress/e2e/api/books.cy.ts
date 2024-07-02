/// <reference types="cypress" />

describe("Books api testing", () => {
  //The request was to create api testing for https://demoqa.com/books, but that url is not correct on finding the apis.
  //I found out that there is a swagger page, that included all the APIS, you can find them here: https://demoqa.com/swagger
  //There are requests not available, but I can create test cases for the ones that allow me
  let testdata: any;
  before(() => {
    cy.fixture("apitestdata").then((fData) => {
      testdata = fData;
    });
  });

  it("fetches books - GET", () => {
    cy.request({
      method: "GET",
      url: `${testdata.apiurl}/Books`,
    }).then((books) => {
      expect(books.status).to.eq(testdata.responsecodes.correct);
      assert.isArray(books.body.books, testdata.booksarray);
    });
  });

  it("fetches specific book", () => {
    cy.request({
      method: "GET",
      url: `${testdata.apiurl}/Book?ISBN=${testdata.bookisbn}`,
    }).then((books) => {
      expect(books.status).to.eq(testdata.responsecodes.correct);
      expect(books.body.title).to.eq(testdata.bodytitle);
      expect(books.body.author).to.eq(testdata.bodyauthor);
    });
  });

  it("fetches non-existing book", () => {
    cy.request({
      method: "GET",
      url: `${testdata.apiurl}/Book?ISBN=${testdata.bookwrongisbn}`,
      failOnStatusCode: false,
    }).then((books) => {
      expect(books.status).to.eq(testdata.responsecodes.badrequest);
      expect(books.body.code).to.eq(testdata.bodyerrorcode);
      expect(books.body.message).to.eq(testdata.bodyerrormessage);
    });
  });
});
