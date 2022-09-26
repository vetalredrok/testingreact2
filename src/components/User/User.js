import React from 'react';
import {Link} from "react-router-dom";

const User = (props) => {

    const {user} = props;
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.email}</p>
            <div>
                <Link to={'/users/'+user.id} state={{...user}}>Details</Link>
            </div>

            <div>
                <Link to={'/users/v2/'+user.id}>user details-v2</Link>
            </div>
            <hr/>
        </div>
    );
};

export default User;