const express = require('express');
const multer = require('multer');
const app = express()
const { Translate } = require("@google-cloud/translate").v2;
const fs = require("fs");
const config = require("config");

process.env.GOOGLE_APPLICATION_CREDENTIALS = "config/google-auth.json";
const projectId = config.get("projectId");

const translate = new Translate({ projectId });

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/translate', (req, res) => {
  res.render('translate.pug', { text: '', result: '...' });
});

const upload = multer();
app.post('/translate', upload.none(), async (req, res) => {
  const text = req.body.text;
  const locale = req.body.locale;
  try {
    const [result] = await translate.translate(text, locale);
    res.render('translate.pug', {
      text, result, locale,
    });
  } catch (err) {
    console.error(err);
    res.render('translate.pug', {
      text, locale, result: `Failed to translate text to ${locale}; ERROR: ${err.message}`,
    });
  }
});

const port = config.get('port');
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

