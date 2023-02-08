const { default: puppeteer } = require("puppeteer");
const { default: login } = require("./services/login");


var cookies;

const start = async () => {
   await login(cookies)
   console.log("Cookie alındı")
}

start()