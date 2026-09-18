const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();
test('XQA-Tab Test',async ({Manager,page})=>{
    const tab= Manager.getTab();
    await tab.goto();
    await tab.openTabPage();
    await expect(page).toHaveURL(/tabs/);
   
    await tab.selectWhatButton();
    await expect(tab.whatDetails).toContainText('Lorem Ipsum is simply dummy text');
    console.log(await tab.whatDetails.textContent());
    
    await tab.selectOriginButton();
    await expect(tab.originDetails).toContainText('Contrary to popular belief');
    console.log(await tab.originDetails.textContent());

    await tab.selectUseButton();
    await expect(tab.useDetails).toContainText('readable content of a page when looking at its layout');
    console.log(await tab.useDetails.textContent());


});