import { CreditCard } from "../POM/creditCard"
const creditcard=new CreditCard();

describe('HSBC credit card flow',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
   
    it('scenario 1 to 5',function(){ 
       creditcard.locators.bankingmenu().contains('Banking').trigger('mouseover')
       creditcard.clickCreditCard()
       creditcard.locators.creditcardheader().should('include.text','Credit cards')
       creditcard.locators.applynowbtn().should('include.text','Apply now')
        
    })

    it('scenario 6 to 11',function(){ 
        cy.visit('/credit-cards/')
        creditcard.locators.creditcardcount().should('have.length','3')
        creditcard.locators.image().first().should('have.attr','alt','HSBC Visa Cashback Credit Card')
        creditcard.locators.creditcardcount().first().should('include.text','HSBC Cashback Credit Card')
        creditcard.locators.comparecards().should('include.text','Compare cards')
        creditcard.locators.findoutmore().should('include.text','Find out more')
        creditcard.locators.creditcardapplybtn().should('include.text','Apply now')
     })

    it('scenario 12 to 28',function(){ 
        cy.visit('/credit-cards/')
        creditcard.clickCompareCards()
        creditcard.locators.closebtnpopup().should('be.visible')
        creditcard.locators.popupheader().should('have.text','Select cards to compare')
        creditcard.locators.availablecreditcards().should('have.length','3')
        creditcard.CheckFirst2cards()
        creditcard.clickCompare()
        creditcard.locators.cardselectioncount().should('have.length','2')
        creditcard.locators.removelink().should('have.length','2').should('include.text','Remove card')
        creditcard.addCard()
        creditcard.CheckThirdCard()
        creditcard.clickCompare()
        creditcard.locators.cardselectioncount().should('have.length','3')
        creditcard.locators.removelink().should('have.length','3').should('include.text','Remove card')
        creditcard.removeCardLink()
        creditcard.locators.cardselectioncount().should('have.length','2')
        creditcard.addCard()
        creditcard.closePopUp()
        cy.wait(5000)
        creditcard.locators.popupscreen().should('not.be.visible')
        cy.wait(10000)
    })

})