import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {PostService} from "../../services";

const PostDetailPage = () => {

    const {state} = useLocation();

    console.log(state);

    const [post, setPost] = useState(state);

    const {id} = useParams();
    useEffect(() => {
        if(!state){
            PostService.getById(id).then(({data})=>{
                setPost({...data});
            });
        }else {
            setPost(state);
        }


    }, [id, state])

    return (
        <div>
            {
                post && <div>{JSON.stringify(post)}</div>
            }

        </div>
    );
};

export {PostDetailPage};