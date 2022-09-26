import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {
    const location = useLocation();
    const {state: user} = location;
    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserDetails;