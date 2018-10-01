const puppeteer = require('puppeteer');

function extractItems() {
  const extractedElements = document.querySelectorAll('div.js-tweet-text-container');
  const items = [];
  let count = 0;
  for (const element of extractedElements) {
    count += 1;
    items.push([ count, element.innerText ]);
  }
  return items;
}

async function scrapeInfiniteScrollItems(
  page,
  extractionFunc,
  itemTargetCount,
  scrollDelay = 1,
) {
  let items = [];
  try {
    let previousHeight;
    while (items.length < itemTargetCount) {
      items = await page.evaluate(extractionFunc);
      previousHeight = await page.evaluate('document.body.scrollHeight');
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
      await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
      await page.waitFor(scrollDelay);
    }
  } catch (e) { console.log('error', e); }
  return items;
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 926 });
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.resourceType() === 'stylesheet' || req.resourceType() === 'font' || req.resourceType() === 'image') {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto('https://twitter.com/google');

  const items = await scrapeInfiniteScrollItems(page, extractItems, 200);

  // Save extracted items to a file.
  console.log(items);

  await browser.close();
})();
