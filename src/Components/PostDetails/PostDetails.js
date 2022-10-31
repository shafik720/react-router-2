import React from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    let param = useParams();
    return (
        <div>
            <h2>Post Details Here ........ </h2>
            <h1>Post : {param.postId} </h1>
        </div>
    );
};

export default PostDetails;