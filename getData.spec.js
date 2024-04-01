const { test,expect } = require("@playwright/test")
const { json } = require("stream/consumers")

const getdata = JSON.parse(JSON.stringify(require('../Test/testdata.json')));

test.describe('drive data',async()=>{
 for(const data of getdata){

    test.describe(`getdata ${data.id}`,function(){

        test('loginfunctionality',async({page})=>{

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      await page.locator("input[name='username']").fill(data.usernamee);
      await page.locator("input[name='password']").fill(data.password)
      await page.locator("button[type='submit']").click();

        })
    })

}


})
