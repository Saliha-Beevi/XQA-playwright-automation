class FileUpload{
    constructor(page){
        this.page=page;
        this.OpenFileUploadLink=page.getByRole('main').getByRole('link',{name:'File Upload'});
        this.fileInput=page.locator('input[type="file"]');
        this.uploadedFileName=page.getByText('Page.png');
        this.uploadedFileSize=page.getByText('209.63 KB');
        this.txtFile=page.getByRole('link', { name: 'sample.txt' });
        this.jsonFile=page.getByRole('link',{name:'data.json'});
        
    }
    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openFileUploadPage(){
        await this.OpenFileUploadLink.click();
    }

    async uploadFile(){
        const filePath= "C:/Users/HP/Desktop/Page.png";
        await this.fileInput.setInputFiles(filePath);
    }

    async downloadTxtFile(){
        const [download1]=await Promise.all([
        this.page.waitForEvent('download'),this.txtFile.click()]);

        return download1;
    }

    async downloadJsonFile(){
        const [download2]= await Promise.all([
        this.page.waitForEvent('download'),this.jsonFile.click()]);

        return download2;
    }


}
module.exports={FileUpload};