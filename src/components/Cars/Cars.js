import React, {useEffect, useState} from 'react';

import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";
import {CarService} from "../../services";

const Cars = () => {

    const[cars,setCars] = useState([]);

    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        CarService.getAll().then(({data}) => {
            setCars([...data])
            console.log(data)
        })

    }, []);

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(value => <Car key={value.id} car={value} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};