const{test,expect,chromium}=require('@playwright/test')

test('login functionality',async({browser})=>{
    const  context = await browser.newContext();
    const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.locator("(//input[@class='radioButton'])[3]").click();

await page.locator("//input[@id='autocomplete']").fill('India');
await page.selectOption("//select[@name='dropdown-class-example']",'Option2');
await page.locator("//input[@name='checkBoxOption3']").click();

const table = await page.locator("//table[@name='courses']");

const rows=await table.locator('tbody tr');
console.log('no of rows ',await rows.count());

 const all=rows.filter({
    has:page.locator('//td'),
    hasText:'Learn JMETER from Scratch - (Performance + Load) Testing Tool'
})
await page.waitForTimeout(3000);

const price=await all.locator('//td[3]').textContent();
console.log('cource price',await price);


const table2 =await page.locator(".tableFixHead")

const row1=await table2.locator("tbody tr");
console.log('no of rows1 ',await row1.count());

 const locations=await row1.filter({
    has:await page.locator("//td"),
    hasText:'Engineer'

})
const total =await locations.locator("//td[4]");
console.log('total',await total.allTextContents());
const total_count = await total.allTextContents();

let sum =0;
for(let i=0;i<=total_count.length-1;i++){
    sum =sum+parseInt(total_count[i]);
    //console.log('total_count is',parseInt(total_count[i]));
}
console.log('total_count of amount is :',sum);

const [newpage]=await Promise.all(
[
 context.waitForEvent("page"),
 await page.locator('#openwindow').click()

]


);
await newpage.waitForTimeout(3000);
await newpage.close();

const [newpage2]=await Promise.all(
    [
     context.waitForEvent("page"),
     await page.locator('//a[@class="btn-style class1 class2"]').click()

    
    ]
    
    
    );


await page.waitForTimeout(3000);
//verifying title
await expect(page).toHaveTitle("Practice Page");
await newpage2.close();
await page.waitForTimeout(2000);
await page.locator('//input[@name="enter-name"]').fill("praveen");
await page.locator('#confirmbtn').click();
await page.waitForTimeout(3000);
await page.on('dailog',async dailog=>{
await expect(dailog.message()).toContain('Hello praveen, Are you sure you want to confirm?');
await dailog.accept();
})

// const newp=newpage.locator('//ul/li/span[1]').allTextContents();
// console.log(newp);






})



