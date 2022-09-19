import React, {useEffect, useState} from 'react';
import {launchesService} from "../../services";
import Launch from "../launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchesService.getAllLaunches().then(({data}) => {
            setLaunches([...data.filter(launch => launch.launch_year !== '2020')]);
            console.log(launches);
        });
    },[]);
    return (
        <div>
            {
                launches.map((value,index) => {
                   return <Launch key={index}
                   launch={value}
                   />
                })
            }
        </div>
    );
};

export default Launches;