import React from 'react';
import ReactServer from 'react-dom/server';
import MainPage from './pages/main';

const ReactRoot = React.createElement('div', { id: 'root' }, MainPage);
const Body = ReactServer.renderToString(ReactRoot);

export default `
<!DOCTYPE html>
<html>
    <head>
        <title>Hello 🚀</title>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script async src="/client-script.js"></script>
    </head>
    <body>${Body}</body>
</html>
`;