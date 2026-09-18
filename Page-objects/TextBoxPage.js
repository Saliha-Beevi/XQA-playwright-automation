const { expect } = require("@playwright/test");

class TextBoxPage{
    constructor(page){
        this.page=page;
        this.fullName=page.getByLabel('Full Name');
        this.email=page.getByLabel('Email');
        this.currentAddress= page.getByLabel('Current Address');
        this.permanentAddress= page.getByLabel('Permanent Address');
        this.submit=page.getByRole('button',{name:'Submit'});
        this.outputName=page.locator('#name');
        this.outputEmail=page.locator('#email');
        this.outputCurrentAddress=page.locator('p#currentAddress');
        this.outputPermanentAddress=page.locator('p#permanentAddress');

    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openTextBox(){
        await this.page.getByRole('main').getByRole('link',{name:"Text Box"}).click();
    }

    async fillDetails(data){
    await this.fullName.fill(data.name);
    await this.email.fill(data.email);
    await this.currentAddress.fill(data.address1);
    await this.permanentAddress.fill(data.address2);
    }

    async verifyOutput(data){
        await expect(this.outputName).toHaveText(`Name: ${data.name}`);
        await expect(this.outputEmail).toHaveText(`Email: ${data.email}`);
        await expect(this.outputCurrentAddress).toHaveText(`Current Address : ${data.address1}`);
        await expect(this.outputPermanentAddress).toHaveText(`Permanent Address : ${data.address2}`);
    }

    async clickSubmit(){
        await this.submit.click();
    }
}
module.exports={TextBoxPage};