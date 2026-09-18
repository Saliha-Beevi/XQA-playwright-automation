class PracticeForm{
    constructor(page){
        this.page=page;
        this.openFormLink= page.getByRole('main').getByRole('link',{name:'Practice Form'});
        this.firstName= page.getByPlaceholder('First Name');
        this.lastName= page.getByPlaceholder('Last Name');
        this.emailId= page.getByPlaceholder('name@example.com');
        this.mobNumber= page.getByPlaceholder('1234567890');
        this.dob= page.locator('#dateOfBirthInput');
        this.picture= page.getByLabel('Picture');
        this.address=page.getByPlaceholder('Current Address');
        this.state=page.getByLabel('State');
        this.city=page.getByLabel('City');
        this.submit=page.getByRole('button',{name:'Submit Form'});
        this.successMessage=page.getByRole('heading',{name:'Thanks for submitting the form'});
        this.close=page.getByRole('button',{name:'Close', exact:true});
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openPracticeFormPage(){
        await this.openFormLink.click();
    }

    async formdetails(data){
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.emailId.fill(data.email);
        await this.mobNumber.fill(data.mobile);
        await this.dob.fill(data.dateOfBirth);
        await this.address.fill(data.currentAddress);
    }
    async selectHobbies(hobby){
        await this.page.getByRole('checkbox',{name:hobby}).check();       
    }
    async selectGender(gender){
        await this.page.getByRole('radio',{name:gender}).check();
    }

    async uploadPicture(){
        const filepath= 'C:/Users/HP/Desktop/Page.png';
        await this.picture.setInputFiles(filepath);
    }

    async selectState(state){
        await this.state.selectOption(state);
    }

    async selectCity(city){
        await this.city.selectOption(city);
    }

    async submitForm(){
        await this.submit.click();
    }

    async closeConfimation(){
        await this.close.click();
    }
}
module.exports={PracticeForm};