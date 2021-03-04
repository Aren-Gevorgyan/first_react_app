import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';

const Users = (props) => {
    
    const usersItem = props.arrayUsers.map(value => {
       return <UsersItem 
                 key={value.id} 
                 id={value.id} 
                 name={value.name} 
                 photo={value.photo}
                 status={value.status}
                 city={value.location.city}
                 country={value.location.country}/>
    })

    return (
       <div className={style.container}>

          <div>
            <h3>Users</h3>
            {usersItem}

            <div className={style.showMore}>
              <button> Show more </button>
            </div>
          </div>

       </div>
    )
}

export default Users;