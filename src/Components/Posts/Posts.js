import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

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
            {
                post.map(index=><Link 
                    to={'/posts/'+index.id}   
                >{index.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;