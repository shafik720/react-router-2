import React from 'react';
import { useNavigate } from 'react-router';

const Friend = (props) => {
    const{name, id} = props.index;
    
    let navigate = useNavigate();
    function showUserDetails(){
        let link = `/friend/${id}`;
        navigate(link);
    }
    return (
        <div>
            <h3>Name : {name} </h3>
            <button onClick={showUserDetails}>Show User</button>
        </div>
    );
};

export default Friend;