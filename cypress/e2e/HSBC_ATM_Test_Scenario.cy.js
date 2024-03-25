import { ATMPage } from "../POM/ATMPage"
const atmpage=new ATMPage();

describe('HSBC ATM Test Scenarios',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    beforeEach(()=>{
        cy.fixture('ATMpage').then(function(data){
            this.data=data
        })
    })
    

    it('scenario 1 to 5',function(){ 
       cy.scrollTo('bottom')
       atmpage.footerLinkClick()
       cy.url().should('contains','/ways-to-bank/branches/')
       atmpage.locators.headertext().then(($text)=>{
        let comparetext=$text.text().trim()  
        expect(comparetext).to.equal(this.data.headertext)
       })
    })

     it('scenario 6 to 11',function(){
        cy.visit('/ways-to-bank/branches/')
        atmpage.clickbranch()
        atmpage.searchInput(this.data.country)
        atmpage.locators.headername().should('include.text','Rajbhavan Road')
        atmpage.showMoreResults()
        atmpage.locators.redicon().eq(1).should('have.text','2').and('have.css','background-color','rgb(219, 0, 17)')
    })

    it('scenario 11 to 17',function(){
        cy.visit('/branch-finder/')
        atmpage.locators.socialmedia().eq(0).should('have.attr','href','https://instagram.com/hsbc_in/')
        atmpage.locators.socialmedia().eq(1).should('have.attr','href','https://www.facebook.com/HSBCIndia/')
        atmpage.locators.socialmedia().eq(2).should('have.attr','href','https://www.twitter.com/HSBC_IN')
        atmpage.locators.socialmedia().eq(3).should('have.attr','href','https://www.youtube.com/channel/UC3Nt_U6gzLlKdAL9Evq0KXQ/featured')
        atmpage.locators.logo().click()
        cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')  
    
    })
    it('scenario 17 to 20',function(){
        cy.scrollTo('bottom')
        atmpage.privacyStatementClick()
        atmpage.locators.privacyheader().should('include.text','Privacy Statement')
        cy.wait(10000)
     })
})
