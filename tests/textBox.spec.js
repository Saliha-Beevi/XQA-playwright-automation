
const testData =require('../test-data/testData.json');
const {test,expect}= require('../Fixtures/testFixture');
require('dotenv').config();
test.describe('XQA Text Box',()=>{

test('Verify textbox with valid details',async({Manager,page})=>{
    
        const textbox= Manager.getTextBoxPage();

        await textbox.goto();
        await textbox.openTextBox();
        await expect(page).toHaveURL(/text-box/);
        await textbox.fillDetails(testData.validUser);
        await textbox.clickSubmit();
        await textbox.verifyOutput(testData.validUser);
   
});
   
test('Verify textbox with empty details',async ({Manager})=>{

    const textbox= Manager.getTextBoxPage();
    await textbox.goto();
    await textbox.openTextBox();
    await textbox.clickSubmit();
    await textbox.verifyOutput(testData.emptyUser);
});
});