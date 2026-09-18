class WebTable{
    constructor(page){
        this.page=page;
        this.openWebTableLink=page.getByRole('main').getByRole('link',{name:'Web Tables'});
        this.search=page.getByPlaceholder('Type to search...');
        this.cierra= page.getByRole('gridcell',{name:'Cierra', exact:true});
        this.alden=page.getByRole('gridcell',{name: 'alden@example.com'});
        this.deleteRecord1=page.locator('#delete-record-1');
        this.deleteRecord2=page.locator('#delete-record-2');
        this.deleteRecord3=page.locator('#delete-record-3');
        this.result=page.getByText('No rows found');
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }
    async openWebTable(){
        await this.openWebTableLink.click();
    }

    async searchData(value){
        await this.search.fill(value);
    }
    
    async deleteData(){
        await this.deleteRecord1.click();
        await this.deleteRecord2.click();
        await this.deleteRecord3.click();
    }

   }
module.exports={WebTable};