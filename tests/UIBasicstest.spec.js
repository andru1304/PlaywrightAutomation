//create a new test 
import { test, expect } from '@playwright/test';

test('First Playwright test using browser login fail', async ({ browser }) => {
    //here we wright playwright code
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    // insert the value in the input box for username
    //await page.fill('input[id="username"]', 'rahulshettyacademy');
    await page.locator("#username").fill("rahulshe");
    //await page.locator("#password").fill("learning");
    await page.locator("[type='password']").fill("learning");
    //click on the login button
    //await page.click("[name='signin']"); -- base on the atribute
    await page.locator("#signInBtn").click();
    let errorMessage = await page.locator("[style*='block']").textContent();
    console.log('Error message is: ' + errorMessage);
    //expect(errorMessage).toContain('Incorrect username/password.');
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
    await page.pause();
    //pause();

});
test('Second Playwright test using browser login not fail', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("#username").clear();
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    //wait for the element to be visible
    //await page.waitForTimeout(5000);
    await (await page.waitForSelector(".card-body .card-title")).isVisible();
});
test.only("Third Playwright test using browser add new item to the card", async ({ page }) => {
    const cardTitles = page.locator(".card-body a");
    page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //add the item to the card
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    //add the item to the card
    //console.log(await cardTitles.first().textContent());
    //console.log(await cardTitles.nth(1).textContent());
    //wait dinamicaly for the page to load
    await (await page.waitForSelector(".card-body .card-title")).isVisible();
    //collect all the items in the card into an array
    let items = await cardTitles.allTextContents();
    console.log(items);
});
test('Firrs Playwright test', async ({ page }) => {
    //here we wright playwright code
    await page.goto('https://google.com/');    
    //get the title and put assertion
    const title = await page.title();
    console.log('Title of the page is: ' + title);
    expect(title).toBe('Google');

});