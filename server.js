const https = require('https');
const dotenv = require('dotenv');
const fs = require('fs');

const { parse } = require('url');

const next = require('next');

dotenv.config();

const isProd = process.env.NEXT_PUBLIC_NODE_ENV === 'production';

const PORT = 3000;
const app = next({ dev: !isProd, hostname: 'localhost', port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const options = {
    key: isProd ? fs.readFileSync('./privkey.pem') : fs.readFileSync('./localhost+1-key.pem'),
    cert: isProd ? fs.readFileSync('./fullchain.pem') : fs.readFileSync('./localhost+1.pem'),
  };

  https
    .createServer(options, (req, res) => {
      const parsedURL = parse(req.url, true);
      handle(req, res, parsedURL);
    })
    .listen(PORT, err => {
      if (err) throw err;
      console.log(`running server on https://localhost:${PORT}`);
    });
});
