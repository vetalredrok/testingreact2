import React from 'react';

const User = (props) => {
    const {user, getUserId} = props;

    return (
        <div>
            <h3>{user.name}</h3>
            <h4>{user.id} -- {user.username}</h4>
            <button onClick={()=> getUserId(user.id)}>GET POSTS</button>
        </div>
    );
};

export {User};