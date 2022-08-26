/// <reference types="cypress"/>

describe('Validate response body', () => {
    it('Succesfully validate base_experience', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').should((Response) => {
            expect(Response.body).to.have.property('base_experience')
        })
    });
})