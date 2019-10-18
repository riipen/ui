import address from 'address';
import express from 'express';
import http from 'http';
import next from 'next';
import url from 'url';

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
});

const nextHandler = nextApp.getRequestHandler();

async function run() {
  await nextApp.prepare();

  const app = express();

  app.get('*', (req, res) => {
    nextHandler(req, res);
  });

  const server = http.createServer(app);

  const port = parseInt(process.env.PORT, 10) || 4000;

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Ready on http://localhost:${port}`);
  });
};

run();