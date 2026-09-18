const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test('XQA=Iframe test',async({Manager,page})=>{
    const iframe= Manager.getIFrame();
    await iframe.goto();
    await iframe.openIFramePage();
    await expect(page).toHaveURL(/frames/);

    await expect(iframe.iFrameHeading1).toBeVisible();
    console.log(await iframe.iFrameHeading1.textContent());
    
    await expect(iframe.iFrameHeading2).toBeVisible();
    console.log(await iframe.iFrameHeading2.textContent());
});