import React from 'react';

import {useNavigate} from 'react-router-dom'

const Post = (props) => {
    const {post} = props;

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>{
            navigate(post.id.toString(), {state:{...post}});
            }}>{post.title}</button>
        </div>
    );
};

export default Post;