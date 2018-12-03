import Koa from 'koa';
import serve from 'koa-static';
import MainPage from './window';

const app = new Koa();

app.use(serve(__dirname + '/public'));

app.use(async (ctx) => {
    ctx.body = MainPage;
});

if (!module.parent) {
    app.listen(3000);
    console.log('Demo app running: http://localhost:3000/');
}