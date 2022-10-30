import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
            <Link to={"/friend/"+id}>Show Details</Link>
            <button onClick={showUserDetails}>Show User</button>
        </div>
    );
};

export default Friend;