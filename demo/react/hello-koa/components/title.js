import React from 'react';

const Title = (props) => {
    return React.createElement(
        'h1',
        null,
        'Hello ',
        props.name,
    )
};

export default Title;