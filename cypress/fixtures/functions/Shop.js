const data = require('../../fixtures/data')
var el = require('../../fixtures/elements.json')
var temp
 export var get_weather = () => {
  cy.visit('/')
  cy.get(el.temprature).should('exist')
  // Getting temperature value
  cy.get(el.temprature).invoke('text').then((text) => {
    temp = text.substr(0, 2) // Getting first two chars of string which is temperature
  })
}

export var shop_Sunscreen = () => {

  if (temp > 34) {
    cy.get('button').contains('Buy sunscreens').click({force:true})
    // Getting least price item for spf-50
    var least_SPF50_price = cy.get('.col-4>p:contains("-50")').next('p:contains("Price")').invoke('text').then((text) => {
      // getting only price from the string
      var price_SPF50 = text.match(/\d/g)
      price_SPF50 = price_SPF50.join("")
      price_SPF50 = price_SPF50.match(/.{1,3}/g)
      least_SPF50_price = Math.min(...price_SPF50)
      cy.get('.col-4>p:contains("-50")').next().contains(least_SPF50_price).next('button').click()
    })
    // Getting least price item for spf-30
    var least_SPF30_price = cy.get('.col-4>p:contains("-30")').next('p:contains("Price")').invoke('text').then((text) => {
      // getting only price from the string
      var price_SPF30 = text.match(/\d/g)
      price_SPF30 = price_SPF30.join("")
      price_SPF30 = price_SPF30.match(/.{1,3}/g)
      least_SPF30_price = Math.min(...price_SPF30)
      cy.get('.col-4>p:contains("-30")').next().contains(least_SPF30_price).next('button').click()
      cy.get('button').contains('Cart').click()
      cy.get('tr>td').next().eq(0).should('have.text', least_SPF50_price)
      cy.get('tr>td').next().eq(1).should('have.text', least_SPF30_price) 
         // setting up payment using stripe iframe. 

  cy.get('.stripe-button-el').click()
  cy.wait(5000)
  cy.get('iframe').then($iframe => {
    const doc = $iframe.contents()
    var email = doc.find('input')[0]
    cy.wrap(email).type(data.payment.email)

    var cardNumber = doc.find('input')[1]
    cy.wrap(cardNumber).type(data.payment.card_number1)

    var cardNumber = doc.find('input')[1]
    cy.wrap(cardNumber).type(data.payment.card_number2)

    var doe = doc.find('input')[2]
    cy.wrap(doe).type(data.payment.DOE)

    var cvc = doc.find('input')[3]
    cy.wrap(cvc).type(data.payment.cvc)

    var zipCode = doc.find('input')[4]
    cy.wrap(zipCode).type(data.payment.zipCode)

    var submit = doc.find('button')
    cy.wrap(submit).click()
  })
  cy.wait(5000)
  cy.get('h2').should('have.text','PAYMENT SUCCESS')
    })
  }
}
  
  export var shop_Moisturizers = () => {
    if (temp < 19) {
      cy.get('button').contains('Buy moisturizers').click({force:true})
      // Getting least price item for almond
      var least_almond_price = cy.get('.col-4>p:contains("lmond")').next('p:contains("Price")').invoke('text').then((text) => {
        // getting only price from the string
        var price_almond = text.match(/\d/g)
        price_almond = price_almond.join("")
        price_almond = price_almond.match(/.{1,3}/g)
        least_almond_price = Math.min(...price_almond)
        cy.get('.col-4>p:contains("lmond")').next().contains(least_almond_price).next('button').click()
      })
      // Getting least price item for Aloe  
      var least_aloe_price = cy.get('.col-4>p:contains("loe")').next('p:contains("Price")').invoke('text').then((text) => {
        // getting only price from the string
        var price_aloe = text.match(/\d/g)
        price_aloe = price_aloe.join("")
        price_aloe = price_aloe.match(/.{1,3}/g)
        least_aloe_price = Math.min(...price_aloe)
        cy.get('.col-4>p:contains("loe")').next().contains(least_aloe_price).next('button').click()
        cy.get('button').contains('Cart').click()
        cy.get('tr>td').next().eq(0).should('have.text', least_almond_price)
        cy.get('tr>td').next().eq(1).should('have.text', least_aloe_price)
           // setting up payment using stripe iframe. 

  cy.get('.stripe-button-el').click()
  cy.wait(5000)
  cy.get('iframe').then($iframe => {
    const doc = $iframe.contents()
    var email = doc.find('input')[0]
    cy.wrap(email).type(data.payment.email)

    var cardNumber = doc.find('input')[1]
    cy.wrap(cardNumber).type(data.payment.card_number1)

    var cardNumber = doc.find('input')[1]
    cy.wrap(cardNumber).type(data.payment.card_number2)

    var doe = doc.find('input')[2]
    cy.wrap(doe).type(data.payment.DOE)

    var cvc = doc.find('input')[3]
    cy.wrap(cvc).type(data.payment.cvc)

    var zipCode = doc.find('input')[4]
    cy.wrap(zipCode).type(data.payment.zipCode)

    var submit = doc.find('button')
    cy.wrap(submit).click()
  })
  cy.wait(5000)
  cy.get('h2').should('have.text','PAYMENT SUCCESS')      
      })   
    } 
  } 
//  export var payment = () => {
//    // setting up payment using stripe iframe. 

//   cy.get('.stripe-button-el').click()
//   cy.wait(5000)
//   cy.get('iframe').then($iframe => {
//     const doc = $iframe.contents()
//     var email = doc.find('input')[0]
//     cy.wrap(email).type(data.payment.email)

//     var cardNumber = doc.find('input')[1]
//     cy.wrap(cardNumber).type(data.payment.card_number1)

//     var cardNumber = doc.find('input')[1]
//     cy.wrap(cardNumber).type(data.payment.card_number2)

//     var doe = doc.find('input')[2]
//     cy.wrap(doe).type(data.payment.DOE)

//     var cvc = doc.find('input')[3]
//     cy.wrap(cvc).type(data.payment.cvc)

//     var zipCode = doc.find('input')[4]
//     cy.wrap(zipCode).type(data.payment.zipCode)

//     var submit = doc.find('button')
//     cy.wrap(submit).click()
//   })
//   cy.wait(5000)
//   cy.get('h2').should('have.text','PAYMENT SUCCESS')
// }
