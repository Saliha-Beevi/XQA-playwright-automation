const{test,expect}=require('../Fixtures/testFixture');
const testData= require('../test-data/testData.json');
const { Screenshot } = require('../utils/Screenshot');
require('dotenv').config();

test.describe('XQA-Student Registration Form',()=>{

test('Registration with valid details',async({Manager,page})=>{
    
    const practiceForm= Manager.getPracticeForm();
    await practiceForm.goto();
    await practiceForm.openPracticeFormPage();
    await expect(page).toHaveURL(/practice-form/);  
    await practiceForm.formdetails(testData.practiceFormUser);
    await practiceForm.selectHobbies("Reading");
    await practiceForm.selectGender("Female");
    
    await practiceForm.uploadPicture();
    await expect(practiceForm.picture).toHaveValue(/Page\.png/);
    await practiceForm.selectState(testData.states[3]);
    await practiceForm.selectCity(testData.cities[2]);
    await practiceForm.submitForm();
    await expect(practiceForm.successMessage).toBeVisible();
    await Screenshot.capture(page,'Practice Form');
    await practiceForm.closeConfimation();

    
});

 });  

