import React from 'react';

const Friend = (props) => {
    const{name, id} = props.index;
    return (
        <div>
            <h3>Name : {name} </h3>
            
        </div>
    );
};

export default Friend;