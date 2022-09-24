import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';

import {carValidator} from "../../validators";
import {CarService} from "../../services";
import {object} from "joi";

const CarForm = (props,) => {
    const {setCars , carForUpdate, setCarForUpdate} = props;
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode:'all'});


    useEffect(()=>{
        setValue('model', 'BMW');
        setValue('price', 1);
        setValue('year', 1990);
    }, [setValue])

    useEffect(()=>{
        if(carForUpdate){
            setValue('model', carForUpdate.model, {shouldValidate:true})
            setValue('price', carForUpdate.price,{shouldValidate:true})
            setValue('year', carForUpdate.year,{shouldValidate:true})
        }
    },[carForUpdate, setValue])


    const submit = async (car) => {
        if(carForUpdate){
            const {data} = await CarService.updateById(carForUpdate.id, car);
            setCars((cars)=>{
             const findCar =  cars.find(value=>value.id===carForUpdate.id);
             Object.assign(findCar, data)
                setCarForUpdate(null)
                return[...cars]

            })

        } else {
            const {data} = await CarService.create(car);
            setCars(cars=>[...cars, data]);
        }
       reset();

    };

    return (
    <form onSubmit={handleSubmit(submit)}>
        <input type='text' placeholder={'model'} {...register('model')}/>
        {errors.model&&<div>{errors.model.message}</div>}
        <input type='text' placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        {errors.price&&<div>{errors.price.message}</div>}
        <input type='text' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        {errors.year&&<div>{errors.year.message}</div>}
        <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
    </form>
    );
};

export {CarForm};