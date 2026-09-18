class Login{
    constructor(page){
        this.page=page;
        this.login=page.getByRole('main').getByRole('link',{name:'Login'});
        this.newUser=page.locator("#newUser");
        this.userName=page.locator('#userName');
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login');
        this.name=page.locator('#name');
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openLoginPage(){
        await this.login.click();
    }

    async selectNewUser(){
        await this.newUser.click();
    }

    async loginCredentials(username,password){
        await this.userName.fill(username);
        await this.password.fill(password);
    }

    async clickLogin(){
        await this.loginButton.click();
    }
}
module.exports={Login};