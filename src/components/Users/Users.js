import React, {useEffect, useState} from 'react';


import {userService} from "../../services";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAllUsers().then(({data}) =>{
            setUsers([...data]);
            console.log(data);
        })
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;