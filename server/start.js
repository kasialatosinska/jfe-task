const path = require('path');
const fs = require('fs');

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const getPort = require('get-port');

async function runServer() {
    const port = await getPort({ port: 3000 });
    const app = new Koa();

    const router = Router();

    router.get('/channels', function(ctx) {
        const channelsJson = fs.readFileSync(path.join(__dirname, 'channels.json'));
        const channels = JSON.parse(channelsJson);
        ctx.body = channels;
    });

    app.use(koaStatic(path.join(__dirname, '..', 'static')));
    app.use(bodyParser()); 
    app.use(router.routes());
    app.listen(port);

    console.log(`server started at http://localhost:${port}/`);
}


runServer().catch(console.error);