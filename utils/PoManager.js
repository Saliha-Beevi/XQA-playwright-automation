const { Alerts } = require("../Page-objects/Alerts");
const { BrowserWindow } = require("../Page-objects/BrowserWindow");
const { Button } = require("../Page-objects/Button");
const { CheckBox } = require("../Page-objects/CheckBox");
const DatePicker = require("../Page-objects/DatePicker");
const { FileUpload } = require("../Page-objects/FileUpload");
const { IFrame } = require("../Page-objects/Iframe");
const { Login } = require("../Page-objects/Login");
const { NestedFrames } = require("../Page-objects/NestedFrames");
const { PracticeForm } = require("../Page-objects/PracticeForm");
const { RadioButton } = require("../Page-objects/RadioButton");
const { Tabs } = require("../Page-objects/Tabs");
const { TextBoxPage } = require("../Page-objects/TextBoxPage");
const { ToolTip } = require("../Page-objects/ToolTip");
const { WebTable } = require("../Page-objects/WebTable");

class PoManager{
    constructor(page){
        this.page=page;
        this.textbox= new TextBoxPage(page);
        this.checkbox= new CheckBox(page);
        this.button=new Button(page);
        this.login=new Login(page);
        this.webtable= new WebTable(page);
        this.radiobutton=new RadioButton(page);
        this.practiceform=new PracticeForm(page);
        this.tooltip=new ToolTip(page);
        this.iframe=new IFrame(page);
        this.browserwindow= new BrowserWindow(page);
        this.alerts=new Alerts(page);
        this.fileupload=new FileUpload(page);
        this.datepicker=new DatePicker(page);
        this.tab=new Tabs(page);
        this.nestedframes= new NestedFrames(page);
    }
    getTextBoxPage(){
        return this.textbox;
    }

    getCheckBox(){
        return this.checkbox;
    }

    getButton(){
        return this.button;
    }

    getLogin(){
        return this.login;
    }

    getWebTable(){
        return this.webtable;
    }
    
    getRadioButton(){
        return this.radiobutton;
    }
    
    getPracticeForm(){
        return this.practiceform;
    }

    getToolTip(){
        return this.tooltip;
    }

    getIFrame(){
        return this.iframe;
    }

    getBrowserWindow(){
        return this.browserwindow;
    }

    getAlerts(){
        return this.alerts;
    }

    getFileUpload(){
        return this.fileupload;
    }

    getDatePicker(){
        return this.datepicker;
    }

    getTab(){
        return this.tab;
    }

    getNestedFrames(){
        return this.nestedframes;
    }

}
module.exports={PoManager};