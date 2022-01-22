const puppeteer = require(`puppeteer`);

(async () => {

    // wait for puppeteer, wait for broswer to open a new page, target the page.
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com`); // link to page goes here

    // Next command makes a full page screenshot. 
    // This works around the chromium hardcoded limit of ~16000px max webpage size.
    await page.screenshot({path:`screenshot${Date.now()}.png`, fullPage: true});
    
    // Next set of commands can take a screenshot of a targeted node.
    // WARNING: If the page exceeds the hardcoded page size limit, the node will be cut in half.
    // You must account for the WHOLE page size / entire DOM. It is not just the size of the node in question.
    /*await page.waitForSelector('SELECTOR GOES HERE');
    const domElement = await page.$('SELECTOR GOES HERE');
    await domElement.screenshot({path:`screenshot${Date.now()}.png`});*/

    // close the browser after the screenshot is taken
    await browser.close();

})();

