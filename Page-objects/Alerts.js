class Alerts{
    constructor(page){
        this.page=page;
        this.openAlertsLink=page.getByRole('main').getByRole('link',{name:'Alerts', exact: true});
        this.clickButton=page.getByRole('button',{name:'Click me'});
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openAlertPage(){
        await this.openAlertsLink.click();
    }

    async clickAlertButton(index){
        await this.clickButton.nth(index).click();
    }
}
module.exports={Alerts};