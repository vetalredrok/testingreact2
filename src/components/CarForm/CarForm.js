import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../../validators";
import {CarService} from "../../services";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver:joiResolver(CarValidator),
        mode: 'all'
    });
    
    const submit = async (car) => {

    if (carForUpdate){
     const {data} = await CarService.updateById(carForUpdate.id, car);

     setCars((cars)=>{
        const findCar = cars.find(value => value.id === carForUpdate.id);
        Object.assign(findCar, data);
        setCarForUpdate(null);
        return [...cars]
     });
    }
    else {
        const {data} = await CarService.create(car);
        setCars(previousCars => [...previousCars, data]);
        reset();
    }
    };

    useEffect(()=>{
        if (carForUpdate){
            setValue('model', carForUpdate.model, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])



    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type='text' placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type='text' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export {CarForm};