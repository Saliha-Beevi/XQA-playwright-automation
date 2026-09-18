const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test.describe('XQA Radio Button Testing',()=>{
    test.beforeEach(async ({Manager,page})=>{
         const radiobutton= Manager.getRadioButton();
         await radiobutton.goto();
         await radiobutton.openRadioButton();
         await expect(page).toHaveURL(/radio-button/);
    });

    test('verify Yes radio button',async({Manager})=>{
    const radiobutton= Manager.getRadioButton();
    await radiobutton.selectRadioButton('Yes');
    await expect(radiobutton.getRadioButton('Yes')).toHaveClass(/border-blue-600/);

    });

    test('verify Impressive radio button',async ({Manager})=>{
      const radiobutton= Manager.getRadioButton();
      await radiobutton.selectRadioButton('Impressive');
      await expect(radiobutton.getRadioButton('Impressive')).toHaveClass(/border-blue-600/);

    });
    
});