
const {test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test.describe('XQA Buttons', ()=>{
    test.beforeEach(async({Manager,page})=>{
    const button= Manager.getButton();
    await button.goto();
    await button.openButton();
    await expect(page).toHaveURL(/buttons/);
 });

test('Verify double click button',async({Manager})=>{
const button= Manager.getButton();
await button.doubleClick();
await expect (button.outputDoubleClick).toHaveText("You have done a double click");
});

test('verify right click button',async ({Manager})=>{
const button= Manager.getButton();
await button.rightClick();
await expect(button.outputRightClick).toHaveText("You have done a right click");
});

test('verify dynamic click button', async ({Manager})=>{
const button= Manager.getButton();
await button.clickButton();
await expect(button.outputClick).toHaveText("You have done a dynamic click");
});

});
