import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => state.userReducer); //returns initial state

    const {users, error, loading, userFromApi} = state;

    useEffect(() => {
        // userService.getAll().then(({data})=> dispatch(userActions.getAll(data))) // замість цього робимо асинхронний асінксанк
        dispatch(userActions.getAll())
    }, [])

    return (
        <div>
            {
                loading && <h2>Loading.......</h2>
            }
            {
                error&& <h2>ERROR!</h2>
            }
            {
                userFromApi && userFromApi.name
            }

            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};