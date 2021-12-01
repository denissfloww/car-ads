import puppeteer from "puppeteer"

let browser: puppeteer.Browser | undefined
let page: puppeteer.Page | undefined

const sleep = async (ms: number) =>
    await new Promise((res) => setTimeout(res, ms))


beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
});
afterAll(() => {
  browser?.close();
});

afterEach(() => {
  sleep(3_000)
})

describe("Auth", () => {
  test("Login test", async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: [`--window-size=1920,1080`] // new option
    })
    page = await browser.newPage()
    await page.goto("http://localhost:3000")
    await sleep(1_000)
    const toLoginFormButton = await page.$("#loginButton")
    toLoginFormButton?.click()
    await sleep(1_000)

    await page.$eval("#usernameField", el => el.value = 'test');
    await page.type('#passwordField', 'password1')

    const submitLoginButton = await page.$("#submitLoginButton")
    submitLoginButton?.click()
    await sleep(1_000)
    const url = page.url();

    expect(url).toBe('http://localhost:3000/home')
    await browser.close();
    //http://localhost:3000/home
  }, 15_000);
})

// describe("Auth2", () => {
//   test("Login test", async () => {
//     browser = await puppeteer.launch({
//       headless: false,
//       defaultViewport: null,
//       args: [`--window-size=1920,1080`] // new option
//     })
//     page = await browser.newPage()
//     await page.goto("http://localhost:3000")
//     await sleep(1_000)
//     const toLoginFormButton = await page.$("#loginButton")
//     toLoginFormButton?.click()
//     await sleep(1_000)
//
//     await page.$eval("#usernameField", el => el.value = 'test');
//     await page.type('#passwordField', 'password')
//
//     const submitLoginButton = await page.$("#submitLoginButton")
//     submitLoginButton?.click()
//     await sleep(1_000)
//     const url = page.url();
//
//     expect(url).toBe('http://localhost:3000/home')
//     await browser.close();
//     //http://localhost:3000/home
//   }, 15_000);
// })


