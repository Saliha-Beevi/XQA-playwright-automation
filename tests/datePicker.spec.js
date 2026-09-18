const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test.describe('XQA-Date picker',()=>{
test.beforeEach(async({Manager,page})=>{
    const datepicker=Manager.getDatePicker();

    await datepicker.goto();
    await datepicker.openDatePickerPage();
    await expect(page).toHaveURL(/date-picker/);

})

test('XQA-Valid Date and time',async({Manager})=>{
    const datepicker=Manager.getDatePicker();
    //date setting
    await datepicker.selectDate('2026-09-11');
    await expect(datepicker.dateSelection).toHaveValue('2026-09-11');

    //date and time setting
    await datepicker.selectDateAndTime('2026-09-11T10:20');
    await expect(datepicker.dataAndTimeSelection).toHaveValue('2026-09-11T10:20');
});

test('XQA-Invalid Date and time',async({Manager})=>{
    const datepicker=Manager.getDatePicker();
  
     await datepicker.selectDate('2026-09-11');
     await datepicker.selectDateAndTime('2026-09-11T10:20');
     await expect(datepicker.dateSelection).toHaveValue('2027-09-11');
     await expect(datepicker.dataAndTimeSelection).toHaveValue('2027-09-11T10:20');  

});
});