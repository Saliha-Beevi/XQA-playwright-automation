class RadioButton{
    constructor(page){
        this.page=page;
        this.openRadioButtonLink=page.getByRole('main').getByRole('link',{name:'Radio Button'});

    }
     
    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }
    async openRadioButton(){
        await this.openRadioButtonLink.click();
    }
    async selectRadioButton(name){
        const row=this.page.getByText(name).locator('..');
        await row.locator('div').first().click();
    }
    getRadioButton(name){
        const row = this.page.getByText(name).locator('..');
        return row.locator('div').first();
    }
}
module.exports={RadioButton};