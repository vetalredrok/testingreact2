import React, {useEffect, useState} from 'react';

import {CarForm} from "../CarForm/CarForm";
import {CarService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
   const [cars, setCars] = useState([]);

   const [carForUpdate, setCarForUpdate] = useState(null);

   useEffect( () => {
       async function fetch(){
           const {data} = await CarService.getAll();
           setCars([...data]);
       }
       fetch();
   }, [])

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {
                cars.map(value => <Car key={value.id} car={value} setCars={setCars} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};

export {Cars};