const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
app.use(express.json());

app.post('/html-to-image', async function(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const html = req.body.html;
  const type = req.body.type || 'png';
  const width = req.body.width || 800;
  const height = req.body.height || 600;

  await page.setContent(html);
  await page.setViewport({ width, height });

  const content = await page.$("body");
  const imageBuffer = await content.screenshot({
    type,
    omitBackground: true
   });

  await page.close();
  await browser.close();

  res.set('Content-Type', `image/${type}`);
  res.end(imageBuffer);
});

const port = 3031
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
