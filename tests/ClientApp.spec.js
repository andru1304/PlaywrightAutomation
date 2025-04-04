import {test, expect} from '@playwright/test';

test('First Clint App test', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("andru1_ro@yahoo.com");
    await page.locator("#userPassword").fill("Andru13@@");
    await page.locator("[name='login']").click();
    //networkidle is disapeared from the new version of Playwright
    //await page.waitForLoadState('networkidle');
    //await page.waitForLoadState('networkidle');
    //wait for the element to be visible
    await page.locator(".card-body b").first().waitFor({state: 'visible'});
    let listTitles = await page.locator(".card-body b").allTextContents();
    console.log(listTitles);
    //extract addidas from the list to add to the card
    let itemList = await listTitles.filter((item) => item.includes("ADIDAS"));
    console.log(itemList);
    await page.pause();
})