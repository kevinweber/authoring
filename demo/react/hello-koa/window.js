const React = require('react');
const ReactServer = require('react-dom/server');
const MainPage = require('./pages/main');

const ReactRoot = React.createElement('div', { id: 'root' }, MainPage);
const Body = ReactServer.renderToString(ReactRoot);

module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <title>Hello 🚀</title>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script async src="/web.bundle.js"></script>
    </head>
    <body>${Body}</body>
</html>
`;