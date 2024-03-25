export class CreditCard
{
    locators = {
        bankingmenu : () => cy.get('.header-main-navigation-title'),
        creditmenu : () => cy.contains('Credit Cards'),
        creditcardheader : () => cy.get('.A-TYP38L-RW-ALL'),
        applynowbtn : () => cy.get('#listing_intro_button_1'),
        creditcardcount : () =>cy.get('.A-LNKND38L-RW-ALL'),
        image : () =>cy.get('#listing_main_image_3'),
        comparecards : ()=>cy.get('#listing_main_button_1'),
        findoutmore : () => cy.get('#listing_main_button_2'),
        creditcardapplybtn : () =>cy.get('#listing_main_button_3'),
        closebtnpopup : () => cy.get('.close-button'),
        popupheader : () => cy.get('#title-pp_tools_productComparator_4'),
        availablecreditcards : () => cy.get('.label-for-checkbox'),
        checkcard1 : () => cy.get('[data-product-type="cashback-credit-card"] > .container-title-checkbox > .modal-checkbox'),
        checkcard2 : () => cy.get('[data-product-type="premier-mastercard-credit-card"] > .container-title-checkbox > .modal-checkbox'),
        checkcard3 : () => cy.get('[data-product-type="visa-platinum-credit-card"] > .container-title-checkbox > .modal-checkbox'),
        clickcompare : () => cy.get('.A-BTNP-RW-ALL > span'),
        cardselectioncount : () => cy.get('.A-TYPS4L-RW-DEV.title.title-loaded'),
        removelink : () => cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon'),
        addcard: () => cy.get('.A-TYPS7R-RW-DEV.link-icon.add-icon > span'),
        clickremovelink : () => cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon > span'),
        popupscreen : () => cy.get('#title-pp_tools_productComparator_4')
        
    }

clickCreditCard()
{
    this.locators.creditmenu().click({force:true})
}

clickCompareCards()
{
    this.locators.comparecards().click({force:true})
}
CheckFirst2cards()
{
    this.locators.checkcard1().click()
    this.locators.checkcard2().click()
}
clickCompare()
{
    this.locators.clickcompare().click()
}
addCard()
{
    this.locators.addcard().eq(0).click()
}
CheckThirdCard()
{
    this.locators.checkcard3().click()
}
removeCardLink()
{
    this.locators.clickremovelink().eq(2).click({force:true})
}
closePopUp()
{
    this.locators.closebtnpopup().click()
}
}

