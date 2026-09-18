class IFrame{
    constructor(page){
        this.page=page;
        this.openIFrameLink=page.getByRole('main').getByRole('link',{name: 'Frames', exact:true});
        this.iFrame1=page.frameLocator("#frame1");
        this.iFrame2=page.frameLocator("#frame2");
        this.iFrameHeading1= this.iFrame1.getByRole('heading',{name:'This is a sample page'});
        this.iFrameHeading2= this.iFrame2.getByRole('heading',{name:'This is a sample page'});
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openIFramePage(){
        await this.openIFrameLink.click();
    }

}
module.exports={IFrame};