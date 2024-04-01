const{test, expect}=require('@playwright/test');

const testdata=JSON.parse(JSON.stringify(require("../Test/testdata.json")));

import { loginorg } from '../Pages/login'; 
import{Homepage}from'../Pages/Homepage';

test('loginpage',async ({page})=>{

const logn=new loginorg(page);

await logn.login();
await logn.loginfun(testdata.usernamee,testdata.password);
await page.waitForTimeout(3000);
//await page.screenshot({ path: '..//screens/screenshot.png' });





})