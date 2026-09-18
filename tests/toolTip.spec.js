const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test.describe('XQA-Tooltip test',()=>{
test.beforeEach(async({Manager,page})=>{
    const tooltip= Manager.getToolTip();
    await tooltip.goto();
    await tooltip.openToolTipPage();
    await expect(page).toHaveURL(/tool-tips/);

});

test('Verify tooltip appears when hovering over the button',async({Manager})=>{
    const tooltip= Manager.getToolTip();
    await tooltip.hoverOverButton();
    await expect(tooltip.buttonToolTip).toBeVisible();
    //const tooltip1= page.locator("#buttonToolTip");
    await expect(tooltip.buttonToolTip).toHaveText('You hovered over the Button');

});

test('Verify tooltip appears when hovering over the text field',async({Manager})=>{
    const tooltip= Manager.getToolTip();
    await tooltip.hoverOverText();
    await expect(tooltip.textToolTip).toBeVisible();
    await expect(tooltip.textToolTip).toHaveText('You hovered over the text field');

});

test('Verify tooltip appears when hovering over the link',async({Manager})=>{
    const tooltip= Manager.getToolTip();
    await tooltip.hoverOverLink();
    await expect(tooltip.linkToolTip).toBeVisible();
    await expect(tooltip.linkToolTip).toHaveText('You hovered over the link');
})

});