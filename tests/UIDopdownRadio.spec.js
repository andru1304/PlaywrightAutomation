import {test, expect} from '@playwright/test';
test("Working with dropdowns and radio buttons", async ({page}) => {
    //working with dropdowns
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    //selecting radio buttons multiple ways
    //await page.locator(".customradio").nth(1).click();
    //await page.locator("[type='radio'][value='user']").click();
    await page.locator("[type='radio']").last().click();
    //click on ok popup button
    await page.locator("#okayBtn").click();
    //this dropdown is a select element
    await page.locator("select.form-control").selectOption("consult");
    await page.pause();
});