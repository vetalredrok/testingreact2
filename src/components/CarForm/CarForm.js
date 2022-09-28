import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators";
import {CarService} from "../../services";

const CarForm = ({setCars}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver:joiResolver(CarValidator),
        mode: 'all'
    });
    
    const submit = async (car) => {
      const {data} = await CarService.create(car);
      setCars(previousCars => [...previousCars, data]);
      reset();
    };

    const giveValue = async () => {
        await setValue('model', 'BMW')
        await setValue('price', 0)
        await setValue('year', 1990)
    }


    return (
        <div>
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type='text' placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type='text' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
            <button onClick={()=>giveValue()}>Give Value</button>
        </div>
    );
};

export {CarForm};