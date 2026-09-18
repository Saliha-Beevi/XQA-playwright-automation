class BrowserWindow{
    constructor(page){
        this.page=page;
        this.openBrowserWindowLink=page.getByRole('main').getByRole('link',{name:'Browser Windows'});
        this.newTabButton=page.getByRole('button',{name:'New Tab',exact:true});
        this.newWindowButton=page.getByRole('button', {name: 'New Window', exact:true});
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openBrowserWindow(){
        await this.openBrowserWindowLink.click();
    }

    async openNewBrowserTab(){
    const [newPage]= await Promise.all([
    this.page.context().waitForEvent('page'),this.newTabButton.click()
    ]);

    return newPage;
    }

    async openNewBrowserWindow(){
        const [newWindow]= await Promise.all([
    this.page.context().waitForEvent('page'), this.newWindowButton.click()
    ]);

    return newWindow;
    }
}

module.exports={BrowserWindow};
