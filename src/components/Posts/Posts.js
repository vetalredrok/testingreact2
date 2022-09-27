import React, {useEffect, useState} from 'react';
import {PostService} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        PostService.getAll().then(({data})=>setPosts([...data]))
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
            
        </div>
    );
};

export {Posts};