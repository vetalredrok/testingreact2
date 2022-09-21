import React, {useEffect, useState} from 'react';
import {userService} from "../../services";

const User = (props) => {
    const {user, getId} = props;

    const [posts, setPosts] = useState([])




    return (
        <div>
            <h3>{user.name}</h3>
            <h4>{user.id} -- {user.username}</h4>
            <button onClick={()=> getId(user.id)}>GET POSTS</button>
        </div>
    );
};

export {User};