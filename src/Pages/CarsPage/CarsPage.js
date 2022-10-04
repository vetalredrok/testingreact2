import React, {useEffect, useState} from 'react';
import {CarForm, Cars} from "../../Components";
import {carService} from "../../Services";
import {useSearchParams} from "react-router-dom";


const CarsPage = () => {
    const [cars, setCars] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data:response})=>{
            setCars(response.data);
            setPrev(response.prev);
            setNext(response.next)
        })
    }, [query])
    
    const prevPage = () => {
      setQuery(value=>({page:value.get('page')-1}))
    }

    const nextPage = () => {
        setQuery(value=>({page:+value.get('page')+1}))
    }

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    );
};

export {CarsPage};