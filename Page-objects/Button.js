class Button{
    constructor(page){
        this.page=page;
        this.openButtonLink= page.getByRole('main').getByRole('link',{name:'Buttons'});
        this.doubleClickButton=page.getByRole('button',{name:'Double Click Me'});
        this.rightClickButton=page.getByRole('button', {name: 'Right Click Me'});
        this.dynamicClickButton=page.locator('#dynamicClickBtn');
        this.outputDoubleClick=page.getByText('You have done a double click');
        this.outputRightClick=page.getByText('You have done a right click');
        this.outputClick=page.getByText('You have done a dynamic click');
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }
    
    async openButton(){
        await this.openButtonLink.click();
    }
    async doubleClick(){
        await this.doubleClickButton.dblclick();
    }

    async rightClick(){
        await this.rightClickButton.click({button:'right'});
    }

    async clickButton(){
        await this.dynamicClickButton.click();
    }
}
module.exports={Button};