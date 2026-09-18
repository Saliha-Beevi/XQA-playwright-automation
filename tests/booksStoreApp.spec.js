const{test,expect}=require('../Fixtures/testFixture');
const testData= require('../test-data/testData.json');
const { Screenshot } = require('../utils/Screenshot');
require('dotenv').config();

test.describe('XQA-Book store application Test', ()=>{

test.beforeEach(async({Manager,page})=>{
  const loginPage= Manager.getLogin();
  await loginPage.goto();
  await loginPage.openLoginPage();
  await expect(page).toHaveURL(/login/);
});

test('Verify New User functionality is not implemented', async({Manager,page})=>{
    const loginPage= Manager.getLogin();
    await loginPage.selectNewUser();
    await expect(loginPage.name).toHaveText('Registration functionality is not implemented yet.');
    await Screenshot.capture(page,'Book store- new user alert');

})

test('Verify login with Invalid Credentials',async({Manager,page})=>{
   const loginPage= Manager.getLogin();
   await loginPage.loginCredentials(testData.invalidLogin.UserName,testData.invalidLogin.Password);
   await loginPage.clickLogin();
   await expect(loginPage.name).toHaveText('Invalid username or password!');
   await Screenshot.capture(page,'Book store- invalid credential');

})

})