
import { LoginPage } from "../POM/loginPage"

const loginpage=new LoginPage();

describe('HSBC login test scenario',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    beforeEach(()=>{
        cy.fixture('loginPage').then(function(data){
            this.data=data
        })
    })

    it('Validate HSBC home logo',()=>{ 
       
        loginpage.locators.image().should('include', '01_HSBC_MASTERBRAND_LOGO_RGB')
        cy.screenshot()
    })

    it('Validate HSBC home title',()=>{ 
        cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')
     })

     it('Click Log on and Validate Header',()=>{ 
        loginpage.loginClick();
        loginpage.locators.header().should('have.text',' Log On   ')
     })

     it('Validate continue button visible and disabled',()=>{ 
        cy.visit('/security/')
        loginpage.locators.btncontinue().should('be.visible').and('be.disabled')
     })

     it('Type email and validate continue button enabled',function(){ 
        cy.visit('/security/')
        loginpage.typeUsername(this.data.username)
        loginpage.locators.btncontinue().should('be.visible').and('be.enabled')
     })

     it('Validate remember me is unchecked',()=>{ 
        cy.visit('/security/')
        loginpage.locators.rememberme().should('not.be.checked')
     })

     it('Validate the presence of tooltip and Click on tooltip',()=>{ 
        cy.visit('/security/')
        loginpage.locators.tooltip().should('be.visible')
        loginpage.tooltipClick()
     })

     it('Validatate the header on popup',()=>{ 
        cy.visit('/security/')
        loginpage.tooltipClick()
        loginpage.locators.popupheader().should('have.text','Username')
        
     })

     it('Validatote the presence of close option and click on it',()=>{ 
        cy.visit('/security/')
        loginpage.tooltipClick()
        loginpage.locators.closepopup().should('be.visible')
        loginpage.popupClosebuttonClick()
     })
     
     })