const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('firefox').build();

async function init(url){
    driver.get(url)
    return driver
}
init("https://www.guvi.in/sign-in")

async function login(){
    let email = (await driver).findElement(By.id("login_email"));
    email.sendKeys("siddhantk.singh.phe14@itbhu.ac.in");
    let pass = (await driver).findElement(By.id("login_password"));
    pass.sendKeys("#coder07");
    let login = (await driver).findElement(By.id("login_button"));
    (await login).click()
    return driver
}
login();