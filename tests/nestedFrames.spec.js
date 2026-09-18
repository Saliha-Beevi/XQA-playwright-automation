const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test.describe('XQA-Nested Frames test', ()=>{
test.beforeEach(async({Manager,page})=>{
    const nestedframes =Manager.getNestedFrames();
    await nestedframes.goto();
    await nestedframes.openNestedFramesPage();
    await expect(page).toHaveURL(/nested-frames/);
});
    test('XQA-Verify parent frames',async({Manager})=>{
    const nestedframes =Manager.getNestedFrames();
    await expect(nestedframes.parentFrame.getByText('Parent Iframe')).toBeVisible();

    });
 
test('XQA-Verify child frames',async({Manager})=>{
    const nestedframes =Manager.getNestedFrames();
    await expect(nestedframes.childFrame.getByText('Child Iframe')).toBeVisible();

});

});