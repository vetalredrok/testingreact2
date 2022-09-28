import React from 'react';

import css from  './Car.module.css'
import {CarService} from "../../services";

const Car = ({car, setCars}) => {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await CarService.deleteById(id);
        setCars(cars=>{
          const indexCar = cars.findIndex(value => value.id === id);
          cars.splice(indexCar, 1);
          return [...cars];
        })
    };
    return (
        <div className={css.Car}>
            <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            </div>
            <div className={css.tools}>
                <button>Update</button>
                <button onClick={()=>deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car};