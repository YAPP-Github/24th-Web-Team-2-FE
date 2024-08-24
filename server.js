// const https = require('https');
const http = require('http');
const dotenv = require('dotenv');
const fs = require('fs');

const { parse } = require('url');

const next = require('next');

dotenv.config();

const isDev = process.env.NEXT_PUBLIC_NODE_ENV !== 'production';

const PORT = 3000;
const app = next({ dev: isDev, hostname: 'localhost', port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const options = {
    // key: fs.readFileSync('./localhost+1-key.pem'),
    // cert: fs.readFileSync('./localhost+1.pem'),
  };

  // https
  //   .createServer(options, (req, res) => {
  //     const parsedURL = parse(req.url, true);
  //     handle(req, res, parsedURL);
  //   })
  //   .listen(PORT, err => {
  //     if (err) throw err;
  //     console.log(`running server on https://localhost:${PORT}`);
  //   });

  http
    .createServer(options, (req, res) => {
      const parsedURL = parse(req.url, true);
      handle(req, res, parsedURL);
    })
    .listen(PORT, err => {
      if (err) throw err;
      console.log(`running server on http://localhost:${PORT}`);
    });
});
