import React from 'react';

const Post = (props) => {

    const {post} = props;
    return (
        <div>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
        </div>
    );
};

export {Post};