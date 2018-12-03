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
        <script async src="/client-script.js"></script>
    </head>
    <body>${Body}</body>
</html>
`;