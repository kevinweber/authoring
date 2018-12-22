const Koa = require('koa');
const serve = require('koa-static');
const MainPage = require('./window');
const Metro = require('metro');

const app = new Koa();

// Serve files publicly
app.use(serve(__dirname + '/public'));

app.use(async (ctx) => {
    ctx.body = MainPage;
});

const runBuild = async () => {
    let config = await Metro.loadConfig();

    await Metro.runBuild(config, {
        entry: __dirname + '/web.js',
        out: __dirname + '/public/web.bundle.js',
        platform: 'web',
    });

    if (!module.parent) {
        app.listen(3000);
        console.log('Demo app running: http://localhost:3000/');
    }
};

runBuild();