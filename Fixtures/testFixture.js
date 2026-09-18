const{test:base,expect}= require('@playwright/test');
const { PoManager } = require('../utils/PoManager');


const test= base.extend({
    Manager: async({page},use)=>{
        const poManager= new PoManager(page);
        await use(poManager);
    }
});
module.exports={test,expect};

