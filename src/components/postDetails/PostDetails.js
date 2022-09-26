import React from 'react';
import {useLocation} from 'react-router-dom';

const PostDetails = () => {

    let {state} = useLocation();
    console.log(state);

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export default PostDetails;