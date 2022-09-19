import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";



const Users = () => {
    const [users, setUsers] = useState([]);

    const [details, setDetails] = useState(null);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers([...data]));
    })


    return (
        <div>
            <hr/>
            {details && <p>username: {details.username},<br/>
            phone: {details.phone}</p>}
            <hr/>
            {users.map(value => <User key={value.id}
            user={value}
            giveDetails={setDetails}
            />)}
        </div>
    );
};

export default Users;