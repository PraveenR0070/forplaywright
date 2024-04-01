const{test,expect }=require('@playwright/test')

const jsondata=JSON.parse(JSON.stringify(require('../Test/testdata.json')))

test.describe("data driven Test",function(){
   
    for(const data of jsondata ){

        test.describe(`Login application ${data.id}` ,function(){

            test('loginfunctionality',async({page})=>{

                await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                await page.locator("input[name='username']").fill(data.usernamee)
                await page.locator("input[name='password']").fill(data.password)
                await page.locator("button[type='submit']").click();
                
            })


        })



    }



})









// test('data read',async ({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator("input[name='username']").fill(jsondata.usernamee)
//     await page.locator("input[name='password']").fill(jsondata.password)
//     await page.locator("button[type='submit']").click();
   
//     await page.pause();






