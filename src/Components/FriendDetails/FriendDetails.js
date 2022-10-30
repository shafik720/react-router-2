import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const params = useParams();
    return (
        <div>
            <h3>Show Details for Friend Number : {params.details} </h3>
        </div>
    );
};

export default FriendDetails;