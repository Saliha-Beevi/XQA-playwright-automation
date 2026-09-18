class ToolTip{
    constructor(page){
        this.page=page;
        this.toolTipLink=page.getByRole('main').getByRole('link',{name: 'Tool Tips'});
        this.hoverbutton=page.getByRole('button',{name:'Hover me to see'});
        this.buttonToolTip=page.locator("#buttonToolTip");
        this.hoverTextField=page.getByPlaceholder('Hover me to see');
        this.textToolTip=page.locator("#textFieldToolTip");
        this.hoverLink=page.getByRole('link',{name:'Hover me to see'});
        this.linkToolTip=page.locator("#linkToolTip");
    }

    async goto(){
         await this.page.goto(process.env.BASE_URL);
    }

    async openToolTipPage(){
        await this.toolTipLink.click();
    }

    async hoverOverButton(){
        await this.hoverbutton.hover();
    }

    async hoverOverText(){
        await this.hoverTextField.hover();
    }

    async hoverOverLink(){
        await this.hoverLink.hover();
    }

}
module.exports={ToolTip};