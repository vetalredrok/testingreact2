import React from 'react';

const Launch = (props) => {
let {launch} = props;
    return (
        <div>
            <p>{launch.mission_name}</p>
            <p>{launch.launch_year}</p>
            <img src={launch.links.mission_patch_small}/>
        </div>
    );
};

export default Launch;