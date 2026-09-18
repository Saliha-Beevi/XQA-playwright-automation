class CheckBox{
    constructor(page){
this.page=page;
this.checkBoxLink= page.getByRole('main').getByRole('link',{name:'Check Box'});
this.toggleButton= page.getByRole('button',{name:'Toggle'}).nth(1);
this.notesRow=page.getByText('Notes').locator('..');
this.commandsRow=page.getByText('Commands').locator('..');
    }
 async goto(){
    await this.page.goto(process.env.BASE_URL);
 }
 async openCheckBox(){
    await this.checkBoxLink.click();
    await this.toggleButton.click();
 }

 async selectNotesCheckbox(){
    await this.notesRow.locator('div').click();
 }

 async selectCommandsCheckbox(){
    await this.commandsRow.locator('div').click();
 }
getNotesCheckbox() {
    return this.notesRow.locator('div');
    }
getCommandsCheckbox(){
    return this.commandsRow.locator('div');
}

}
module.exports={CheckBox};