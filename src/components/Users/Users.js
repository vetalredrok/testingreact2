import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";

const Users = (props) => {
    const {getId} = props;
    const [users, setUsers] = useState([]);




    useEffect(() => {
        userService.getAll().then(({data}) => {
            setUsers([...data])
        });
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value} getId={getId}/>)
            }
        </div>
    );
};

export {Users};