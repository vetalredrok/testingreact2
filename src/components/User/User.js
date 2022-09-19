import React from 'react';


let flag = false;

const User = (props) => {

    let {user, giveDetails} = props
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>email: {user.email}</div>
            <button onClick={()=>{
                if(!flag){
                    giveDetails(user);
                    flag = true;
                } else {
                    giveDetails(null);
                    flag = false;
                }

            }}>Test</button>
        </div>
    );
};

export default User;