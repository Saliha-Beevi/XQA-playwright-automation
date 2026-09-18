const{test,expect}=require('../Fixtures/testFixture');
const { Screenshot } = require('../utils/Screenshot');
require('dotenv').config();

test.describe('XQA-Browser windows test',()=>{
    test.beforeEach(async({Manager,page})=>{

        const browserWindow= Manager.getBrowserWindow();
        await browserWindow.goto();
        await browserWindow.openBrowserWindow();
        await expect(page).toHaveURL(/browser-windows/);
    })

test('Verify Browser New Tab is working',async({Manager,page})=>{
    const browserWindow= Manager.getBrowserWindow();
    const newPage= await browserWindow.openNewBrowserTab();

    await expect(newPage).toHaveURL(/practice/);
    await expect(newPage.getByRole('heading',{name:'Welcome to the Practice Area'})).toBeVisible();
    await Screenshot.capture(page,'New Browser Tab');
});

test('Verify Browser New Window is working',async({Manager,page})=>{
    const browserWindow= Manager.getBrowserWindow();
    const newWindow= await browserWindow.openNewBrowserWindow();

    await expect(newWindow).toHaveURL(/practice/);
    await expect(newWindow.getByRole('heading',{name:'Welcome to the Practice Area'})).toBeVisible();
    await Screenshot.capture(page,'New Browser Window');
 
});

});