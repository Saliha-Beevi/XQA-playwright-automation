const { truncate } = require("node:fs/promises");

class NestedFrames{
    constructor(page){
        this.page=page;
        this.openNestedFramesLink=page.getByRole('main').getByRole('link',{ name:'Nested Frames', exact: true});
        this.parentFrame=page.frameLocator('#frame1');
        this.childFrame=this.parentFrame.frameLocator('iframe');
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openNestedFramesPage(){
        await this.openNestedFramesLink.click();
    }

}
module.exports={NestedFrames};