import React from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div style={{display: 'flex'}}>
            <div>
                <Outlet/>
            </div>
            <div>
                <Posts/>
            </div>
        </div>
    );
};

export {PostsPage};