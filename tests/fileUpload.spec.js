const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();
test.describe('XQA-File Upload test',()=>{

test.beforeEach(async({Manager,page})=>{
    const fileupload= Manager.getFileUpload();
    await fileupload.goto();
    await fileupload.openFileUploadPage();
    await expect(page).toHaveURL(/file-upload/);
});

test('Verify file  uploads sucessfully',async ({Manager})=>{
     const fileupload= Manager.getFileUpload();
     await fileupload.uploadFile();
     await expect(fileupload.uploadedFileName).toBeVisible();
     await expect(fileupload.uploadedFileSize).toBeVisible();

});

test('Verify files download sucessfully',async ({Manager})=>{
    const fileupload= Manager.getFileUpload();

// Download sample.txt
   
    const download1= await fileupload.downloadTxtFile();
    expect(download1.suggestedFilename()).toBe('sample.txt');

// Download data.json

   const download2= await fileupload.downloadJsonFile();
   expect(download2.suggestedFilename()).toBe('data.json');


});
});