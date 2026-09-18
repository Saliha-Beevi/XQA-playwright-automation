const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test('XQA-Alerts testing',async({Manager,page})=>{
    const alerts= Manager.getAlerts();
    await alerts.goto();
    await alerts.openAlertPage();
    await expect(page).toHaveURL(/alerts/);

    //first alert
    page.once('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await alerts.clickAlertButton(0);
       
    //second alert
    page.once('dialog', async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    });

    await alerts.clickAlertButton(1);
    await page.waitForTimeout(5000);

    //third alert
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.dismiss();
    })

      await alerts.clickAlertButton(2);

    //fourth alert
    page.once('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept("Saliha");
    })
      await alerts.clickAlertButton(3);
})