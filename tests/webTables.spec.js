
const{test,expect}=require('../Fixtures/testFixture');
require('dotenv').config();

test.describe('XAQ-Web tables Test',()=>{
test.beforeEach(async({Manager,page})=>{

  const webtable=Manager.getWebTable();
  await webtable.goto();
  await webtable.openWebTable();
  await expect(page).toHaveURL(/web-tables/);
});

test('XQA Web Tables-valid search',async ({Manager})=>{
  const webtable=Manager.getWebTable();
  await webtable.searchData('Cierra');
  await expect(webtable.cierra).toBeVisible();
  await webtable.searchData('alden@example.com');
  await expect(webtable.alden).toBeVisible();
});

test('XQA Web Tables-invalid search',async({Manager})=>{
const webtable= Manager.getWebTable();
await webtable.searchData('Alex');
await expect(webtable.result).toBeVisible();
});

test('XQA-Delete functionality', async ({Manager})=>{
  const webtable=Manager.getWebTable();
  await webtable.deleteData();
  await expect(webtable.result).toBeVisible();
});

});