console.log('client-script.js loaded');

const Title = (props) => {
    return React.createElement(
        'h1',
        null,
        'Hello ',
        props.name,
    )
};

const MainPage = React.createElement(Title, {
    name: 'Koa JS',
});

const domContainer = document.querySelector('#root');
ReactDOM.hydrate(MainPage, domContainer);