const { expect, chromium } = require("@playwright/test");

const config=({
  testDir:'./tests',
  
  workers:3,


  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  projects:[
{
name:'chrome',
  use:{
    browserName:'chromium',
    headless:false,
ignoreHTTPSerrors:true,
screenshot:'only-on-failure',
trace:'retain-on-failure',
video:'retain-on-failure',



},
  }]
})

module.exports=config;