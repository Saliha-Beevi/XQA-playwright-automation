
const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();
test.describe('XQA Check Box test-selection and deselection',()=>{

test('Verify Notes checkbox',async ({Manager,page})=>{

const checkbox= Manager.getCheckBox();
await checkbox.goto();
await checkbox.openCheckBox();
await expect(page).toHaveURL(/check-box/);
await checkbox.selectNotesCheckbox(); 
await expect(checkbox.getNotesCheckbox()).toHaveClass(/bg-blue-600/);

await checkbox.selectNotesCheckbox();
await expect(checkbox.getNotesCheckbox()).toHaveClass(/border-gray-400/);
});
    
test('verify Commands checkbox', async ({Manager})=>{

const checkbox= Manager.getCheckBox();
await checkbox.goto();
await checkbox.openCheckBox();
await checkbox.selectCommandsCheckbox();
await expect(checkbox.getCommandsCheckbox()).toHaveClass(/bg-blue-600/);
await checkbox.selectCommandsCheckbox();
await expect(checkbox.getCommandsCheckbox()).toHaveClass(/border-gray-400/);

});
    
});