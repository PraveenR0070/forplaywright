const{test,expect}=require('@playwright/test');
import { loginorg } from '../Pages/login';
import { homepage } from '../Pages/Homepage';
let page;
test.beforeEach(async ({browser})=>{

   page= await browser.newPage();

    const logn=new loginorg(page);

    await logn.gotoorg();
    await page.waitForTimeout(3000);
    await logn.loginfun('Admin','admin123');
    await page.waitForTimeout(3000);
})

test.afterEach(async ()=>{
await page.close();
})
test('home page',async ({page})=>{

    const home= new homepage(page);
    home.clcikAdmin();
    await page.waitForTimeout(2000);
    home.filldata('Admin');
    await page.waitForTimeout(4000);
    home.dropdown1('Admin');
    await page.waitForTimeout(3000);
    home.filltext2('Paul Collings');
    await page.waitForTimeout(3000);
    home.dropdownn2('Paul Collings');
    await page.waitForTimeout(3000);
    home.searchbutton();

    await page.screenshot({path:'..//screens/screenshot.png'});
   


})

