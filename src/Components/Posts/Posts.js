import React, { useEffect, useState } from 'react';

const Posts = () => {
    let [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h2>Hello From posts : {post.length} </h2>
        </div>
    );
};

export default Posts;