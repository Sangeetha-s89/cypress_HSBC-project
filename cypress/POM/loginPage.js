export class LoginPage
{
    locators = {
        image : () => cy.xpath("/html/body/div[2]/div/header/div[4]/div/div[2]/div/div/div/h1/img")
                     .invoke('attr','src'),
        loginclick : () => cy.xpath("/html/body/div[2]/div/header/div[4]/div/div[1]/div/div/div/div/div/nav/ul/li[5]/div/a[1]"),
        header: () => cy.xpath("/html/body/div[2]/div/div[1]/digital-security-platform-web/div[2]/ui-view/username/div[2]/div/div[1]/form/div[1]/div/h2/span"),
        btncontinue : () => cy.get('#username_submit_btn'),  
        username : () => cy.get('#username'),
        rememberme : () => cy.get('#rememberMe'),
        tooltip : () => cy.get('#username_help_link > [role="text"] > .icon'),
        popupheader : () => cy.get('#help_content_1 > h3 > span'),
        closepopup : () => cy.get('.close-btn > [role="text"] > .icon')
        
}

loginClick()
{
    this.locators.loginclick().click({force:true})
}
typeUsername(username)
{
    this.locators.username().type(username)
}
tooltipClick()
{
    this.locators.tooltip().click()
}

popupClosebuttonClick()
{
    this.locators.closepopup().click()
}
}



    
