const{test,expect}=require('@playwright/test');
import { loginorg } from '../Pages/login';
import { homepage } from '../Pages/Homepage';

test("homepage",async ({page})=>{

    const logn=new loginorg(page);

    await logn.gotoorg();
    await logn.loginfun('Admin','admin123');
    await page.waitForTimeout(3000);
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

