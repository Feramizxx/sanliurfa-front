import React from 'react';

const List = ({data, renderFunction, className}) => {
    return (
        <div className={className}>
            {data.map(renderFunction)}
        </div>
    );
};

export default List;