/* eslint-disable no-undef */
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Enter your email"]').should('be.visible');
    cy.get('input[placeholder="Enter your password"]').should('be.visible');
    cy.get('button').contains(/^Log in$/).should('be.visible');
  });

  it('should display alert when username is empty', () => {
    cy.get('button').contains(/^Log in$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[placeholder="Enter your email"]').type('testing@test.com');

    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Log in$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Enter your email"]').type('testing@test.com');

    // mengisi password yang salah
    cy.get('input[placeholder="Enter your password"]').type('testing_wrong');

    // menekan tombol Login
    cy.get('button').contains(/^Log in$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when username and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Enter your email"]').type('testing@test.com');

    // mengisi password
    cy.get('input[placeholder="Enter your password"]').type('test123456');

    // menekan tombol Login
    cy.get('button').contains(/^Log in$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('div').contains(/^Threap$/).should('be.visible');
    cy.get('footer').contains('zhaardhia').should('be.visible');
  });
});
