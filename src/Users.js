import React from 'react';


const Users = ({name,age,nationality})=>{
    return(
        <div>
            <p>Name:{name}</p>
            <p>age:{age}</p>
            <p>nationality:{nationality}</p>
        </div>
    )
}

export default Users;