import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {userService} from "../../services";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        userService.getAllPosts().then(({data})=>{
            setPosts([...data]);
        })
    }, [])

    return (
        <div>
            <Outlet/>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;