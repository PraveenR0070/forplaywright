const{test,expect}=require('@playwright/test')

test('login functionality',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('//a[@class="btn-style class1 class2"]').click()
    // const title =page.getByTitle();
    // console.log(title);
    await expect(page).toHaveTitle("Practice Page");
    // await page.locator('#openwindow').click();
    // const hed=await page.locator("(//div[@class='col-lg-8 col-md-8'])//p");
    // await console.log(hed.allTextContents());
    
    // await page.waitForTimeout(3000);







})