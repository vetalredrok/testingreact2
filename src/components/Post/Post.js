import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

const navigate = useNavigate();


    const {id, title} = post;
    return (
        <div>
            <h5>id: {id}</h5>
            <p>title: {title}</p>
            <button onClick={()=> navigate(id.toString(), {state:{...post}})}>PostDetail</button>
        </div>
    );
};

export {Post};