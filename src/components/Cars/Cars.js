import React, {useEffect, useState} from 'react';

import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {CarService} from "../../services";

const Cars = () => {

    const[cars,setCars] = useState([]);

    useEffect(() => {
        CarService.getAll().then(({data}) =>setCars([...data]))
    }, []);

    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export {Cars};