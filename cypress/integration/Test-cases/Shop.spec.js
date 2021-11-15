import 'cypress-xpath';
const data = require('../../fixtures/data') // data elements will be kept here
var fn = require('../../fixtures/functions/Shop') // if we had test ids it would have been get from here So just a structure
var el = require('../../fixtures/elements.json') // all the functions are being kept here

describe('Shop Suncreen Or Moisturizers', () => {
  beforeEach(() => {
    cy.viewport(1280,720) 
  })
  it('it should shop Sunscreen or Moisturizers according to temperature', () => {
   
      cy.visit('/')
      cy.get(el.temprature).should('exist')
      fn.shop_sunScreen() 
      fn.payment()
  })

})

