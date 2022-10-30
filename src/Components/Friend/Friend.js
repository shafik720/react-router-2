import React from 'react';

const Friend = (props) => {
    const{name, id} = props.index;
    function showUserDetails(){
        console.log(id);
    }
    return (
        <div>
            <h3>Name : {name} </h3>
            <button onClick={showUserDetails}>Show User</button>
        </div>
    );
};

export default Friend;