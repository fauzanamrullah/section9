/// <reference types="cypress"/>

describe('Validate content', () => {
    it('Succesfully validate abilities', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        var dataPoke = {
            "ability" : {
                "name": "limber",
                "url": "https://pokeapi.co/api/v2/ability/7/"
            }
        }

        cy.get('@pokemon').should((Response) => {
            expect(Response.body.abilities[0].ability.name).to.eq(dataPoke.ability.name)
        })
    });
})