import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";

const UserDetailsV2 = () => {

    const {id} = useParams();
    const [user, setUser] = useState([]);


    useEffect(() => {
        userService.getUser(id).then(({data}) =>{
            console.log(data);
            setUser([{...data}]);

        });

    }, [id]);

    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserDetailsV2;