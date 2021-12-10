import puppeteer from 'puppeteer';
import * as path from 'path';
import * as fs from 'fs';
let browser: puppeteer.Browser | undefined;
let page: puppeteer.Page | undefined;
const sleep = async (ms: number) => await new Promise(res => setTimeout(res, ms));

const baseUrl = 'https://somedabestlibrary.herokuapp.com';

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [`--window-size=1920,1080`],
  });
  page = await browser.newPage();
  await page.goto(baseUrl);
});
afterAll(() => {
  browser?.close();
});

afterEach(() => {
  sleep(3_000);
});

describe('All', () => {
  test('Login', async () => {
    await sleep(1_000);
    const toLoginFormButton = await page?.$('#authorize');
    toLoginFormButton?.click();
    await sleep(1_000);

    await page?.type('#email_place', 'userD@mail.ru');
    await page?.type('#password_place', 'userD');
    const submitLoginButton = await page?.$('#log_in');
    submitLoginButton?.click();
    await sleep(1_000);
    const url = page?.url();

    expect(url).toBe(`${baseUrl}/`);
  }, 15_000);

  test('Add publication', async () => {
    await sleep(1_000);
    await page?.goto(`${baseUrl}/add_publication/`);
    await sleep(1_000);

    await page?.type('#book_name_place', 'Название книги');
    await page?.select('#book_author_name_place', '18');
    await page?.select('#book_theme_name_place', '1');
    await page?.select('#book_type_name_place', '2');
    await page?.type('#book_short_review_place', 'Краткое описание');
    await page?.type('#book_publication_length_place', '244');
    await page?.select('#book_publicator_place', '1');
    await page?.select('#book_language_place', '2');
    await page?.select('#book_region_place', '1');
    const fileDirectory = path.resolve(__dirname, 'tmp');
    const filePath = `${fileDirectory}\\publication.txt`;
    const element = await page?.$('#ze_best_file');
    await element?.uploadFile(filePath);

    const addPublicationButton = await page?.$('#book_create_button');
    addPublicationButton?.click();

    await page?.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });

    await sleep(3_000);
    const url = page?.url();
    expect(url).toBe(`${baseUrl}/`);
  }, 15_000);
  test("Add feedback", async () => {
    await sleep(1_000)
    await page?.goto(`${baseUrl}/publication`)
    await sleep(1_000)
    const publicationOpenButton = await page?.$("#publications_open_item_10")
    publicationOpenButton?.click()

    await sleep(2_000)
    const feedBacksPageButton = await page?.$("#publication_marks_undefined")
    feedBacksPageButton?.click()

    await sleep(2_000)
    const addFeedBackButton = await page?.$("#marks_add_new")
    addFeedBackButton?.click()

    await sleep(2_000)
    await page?.type('#mark_review', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat ipsam modi molestiae molestias odio reiciendis reprehenderit! Aut cumque dolorem, illum itaque natus nisi nostrum praesentium quisquam quos, ratione sed?')
    await sleep(1_000)
    await page?.$eval("#mark_rate", el => el.value = '9');

    const createFeedBackButton = await page?.$("#mark_create_button")
    createFeedBackButton?.click()

    page?.on('dialog', async dialog => {
      console.log(dialog.message())
      await dialog.accept()
    })

    const url = page?.url();
    expect(url).toBe(`${baseUrl}/add_mark/10`)
  }, 25_000)
});

describe('Export', () => {
  test('Export to Excel test', async () => {
    const client = await page?.target().createCDPSession();
    const downloadPath = path.resolve(__dirname, 'tmp');
    await client?.send('Page.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: downloadPath,
    });
    await sleep(1_000);
    await page?.goto(`${baseUrl}/excel`);
    await sleep(1_000);
    const exportButton = await page?.$('#excel_table_download');
    exportButton?.click();
    await sleep(4_000);
    const filePath = `${downloadPath}\\generatedBy_react-csv.csv`;
    let resultSaving = '';
    if (fs.existsSync(filePath)) {
      resultSaving = 'ok';
    } else {
      resultSaving = 'error';
    }
    expect(resultSaving).toBe('ok');
    await sleep(1_000);
  }, 25_000);
});

//Тут тест моего приложения должен был быть....
// import puppeteer from "puppeteer"
//
// let browser: puppeteer.Browser | undefined
// let page: puppeteer.Page | undefined
//
// const sleep = async (ms: number) =>
//     await new Promise((res) => setTimeout(res, ms))
//
//
// beforeAll(async () => {
//   browser = await puppeteer.launch();
//   page = await browser.newPage();
//   await page.goto('http://localhost:3000/');
// });
// afterAll(() => {
//   browser?.close();
// });
//
// afterEach(() => {
//   sleep(3_000)
// })
//
// describe("Auth", () => {
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
//     await page.type('#passwordField', 'password1')
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
