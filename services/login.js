const { default: puppeteer } = require("puppeteer");


const login = async (cookies) => {
   const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: 0,
   });
   const page = await browser.newPage();

   await page.goto('https://twitter.com/i/flow/login')
   await page.waitForNavigation()
   const cerez = await page.cookies()
   cookies = cerez

   await browser.close()
}


exports.default = login