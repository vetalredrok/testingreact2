import React from 'react';
import {Post} from "../Post/Post";

const Posts = (props) => {
    const {posts} = props
    return (
        <div>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export {Posts};