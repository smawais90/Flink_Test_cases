import 'cypress-xpath';
const data = require('../../fixtures/data') // data elements will be kept here
var fn = require('../../fixtures/functions/Shop') // if we had test ids it would have been get from here So just a structure
var el = require('../../fixtures/elements.json') // all the functions are being kept here

describe('Shop Suncreen Or Moisturizers', () => {
  beforeEach(() => {
    cy.viewport(1280,720)
    fn.get_weather() 
  })
  it.only('it should shop Sunscreen temperature if temprature is greater than 34', () => {
   
      
      fn.shop_Sunscreen() 
      
  })
  it.only('it should shop Moisturizers if the temperature is less than 19', () => {
   
    
    fn.shop_Moisturizers() 
    
})
it.only('it should shop Nothing is between 19 and 34', () => {
   
    fn.shop_nothing()
  
})
})

