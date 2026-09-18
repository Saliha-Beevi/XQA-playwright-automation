class Tabs{
    constructor(page){
        this.page=page;
        this.openTabLink=page.getByRole('main').getByRole('link',{name: 'Tabs'});
        this.whatButton=page.getByRole('button',{name:'What'});
        this.whatDetails=page.locator('#demo-tabpane-what');
        this.originButton=page.getByRole('button',{name:'Origin'});
        this.originDetails=page.locator('#demo-tabpane-origin');
        this.useButton=page.getByRole('button',{name:'Use'});
        this.useDetails=page.locator('#demo-tabpane-use');
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }
     
    async openTabPage(){
        await this.openTabLink.click();
    }

    async selectWhatButton(){
        await this.whatButton.click();
    }

    async selectOriginButton(){
        await this.originButton.click();
    }

    async selectUseButton(){
        await this.useButton.click();
    }
}
module.exports= {Tabs};