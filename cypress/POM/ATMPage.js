export class ATMPage
{
    locators = {
        footerlink : () => cy.xpath("/html/body/footer/div[1]/div/div/nav/ul/li[2]/a"),
        headertext : () => cy.get('.A-TYP38L-RW-ALL'),
        branchbtn : () => cy.get('#content_main_button_1 > [aria-hidden="true"]'),  
        searchinput : () =>cy.get('#searchInput'),
        dynamiclist : () =>cy.get('#autocomplete-results'),
        headername : () => cy.get('.uItFVQvJsoQVBXhG5ERC'),
        showmore : () => cy.get('button'),
        redicon : () => cy.get('.yWQITJvVOSElgOOsYgyM') ,            
        socialmedia : () =>cy.get('.social-image'),
        logo : () => cy.xpath("/html/body/div[1]/div/header/div[4]/div/div[2]/div/div/div/a/img"),
        privacystatement : () =>cy.get('a[href="/privacy-statement/"]'),
        privacyheader : () => cy.get('.A-TYP48T-RW-ALL')
     }

footerLinkClick()
{
    this.locators.footerlink().click()
}
clickbranch()
{
     this.locators.branchbtn().click({force:true})
}
searchInput(country)
{
    this.locators.searchinput().type(country,{force:true})
    cy.wait(5000)
    this.locators.searchinput().type('{backspace}')
    cy.wait(2000)
    this.locators.dynamiclist().contains(country).click()
}
showMoreResults()
{
    this.locators.showmore().contains('Show more results').click()
}
privacyStatementClick()
{
    this.locators.privacystatement().eq(2).click({force:true})
}
}