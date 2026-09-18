class DatePicker{
    constructor(page){
        this.page=page;
        this.openDatePickerlink=page.getByRole('main').getByRole('link',{name:'Date Picker'});
        this.dateSelection=page.locator('#datePickerMonthYearInput');
        this.dataAndTimeSelection=page.locator('#dateAndTimePickerInput');
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL);
    }

    async openDatePickerPage(){
        await this.openDatePickerlink.click();
    }

    async selectDate(date){
        await this.dateSelection.fill(date);
    }

    async selectDateAndTime(dateTime){
        await this.dataAndTimeSelection.fill(dateTime);
    }
    
}

module.exports= DatePicker;