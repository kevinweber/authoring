const React = require('react');
const ReactServer = require('react-dom/server');

const Koa = require('koa');

const Example = require('./components/title.js');
const app = new Koa();

app.use(async function(ctx) {
    const Body = React.createElement(Example, {
        name: 'Koa',
    });

    ctx.body = ReactServer.renderToString(Body);
});

if (!module.parent) {
    app.listen(3000);
    console.log('Demo app running: http://localhost:3000/');
}