const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log(await page.title());
    await page.locator('.text-reset').click();
    await page.locator('#firstName').fill('Anshuman');
    await page.locator('#lastName').fill('Jha');
    await page.locator('#userEmail').fill('anshuman.jha04@gmail.com');
    await page.locator('#userMobile').fill('9876543210');
    await page.locator('#userPassword').fill('Learning@830$3mK2');
    await page.locator('#confirmPassword').fill('Learning@830$3mK2');
    await page.locator('.col-md-1 .ng-pristine.ng-invalid.is-invalid.ng-touched').click();
    // await page.screenshot({path: 'screenshot.png'});
});

test('Page Playwright test', async ({page})=>
    {
        const userName = page.locator('input#username');
        const signIn = page.locator('#signInBtn');
        const cardTitles = page.locator('.card-body a');
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());
        await userName.fill('rahulshettyacadem');
        await page.locator('input#password').fill('Learning@830$3mK2');
        await signIn.click();
        console.log(await page.locator('[style*="block"]').textContent());
        await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
        await userName.fill("");
        await userName.fill('rahulshettyacademy');
        await signIn.click();
        console.log(await cardTitles.first().textContent());
        console.log(await cardTitles.nth(1).textContent());
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles);

    });

//*test('Page Playwright test', async ({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log(await page.title());
    await page.locator('.text-reset').click();
    await page.locator('#firstName').fill('Anshuman');
    await page.locator('#lastName').fill('Jha');
    await page.locator('#userEmail').fill('anshuman.jha04@gmail.com');
    await page.locator('#userMobile').fill('9876543210');
    await page.locator('#userPassword').fill('Learning@830$3mK2');
    await page.locator('#confirmPassword').fill('Learning@830$3mK2');
    await page.locator('.col-md-1 .ng-pristine.ng-invalid.is-invalid.ng-touched').click();
});

        
