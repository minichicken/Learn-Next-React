import express from 'express';
import next from 'next';

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV !== 'production';

const app = next({ dev: env });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query);
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, (err: express.Errback) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })
});
