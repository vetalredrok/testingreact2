import React from 'react';

import css from './Car.module.css'
import {CarService} from "../../services";

const Car = (props) => {

    let {car, setCars, setCarForUpdate} = props;
    
    const deleteCar = async () => {
      await CarService.deleteById(car.id);
      setCars(cars =>{
        const index = cars.findIndex(value => value.id === car.id);
        cars.splice(index, 1);
        return [...cars]
      })
    }
    
    return (
        <div className={`${css.Car}`}>
            <div>
                <div>id: {car.id}</div>
                <div>model: {car.model}</div>
                <div>price: {car.price}</div>
                <div>year: {car.year}</div>
            </div>

            <div className={css.tools}>
                <button onClick={()=>setCarForUpdate(car)}>Update</button>
                <button onClick={()=> deleteCar()}>Delete</button>

            </div>
        </div>
    );
};

export {Car};