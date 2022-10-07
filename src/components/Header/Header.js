import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css'


const Header = () => {
    const selector = useSelector(state => state.userReducer);
    const {currentUser} = selector;


    return (
        <div className={css.Header}>
            {
                currentUser && currentUser.name
            }
        </div>
    );
};

export {Header};