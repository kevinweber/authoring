const React = require('react');

const Title = (props) => {
    return React.createElement(
        'h1',
        null,
        'Hello ',
        props.name,
    )
};

module.exports = Title;