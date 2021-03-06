import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

   constructor(props){
        super(props);
        
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
              props.usersData(response.data.items);
        })
   }
   
   _usersItem(){
      let usersItem = this.props.arrayUsers.map(value => {
         return <UsersItem 
                   key={value.id} 
                   id={value.id} 
                   name={value.name} 
                   photo={value.photo}
                   status={value.status}
                   follow={value.followed}
                   following={this.props.following}/>
      })
      return usersItem;
   }

   render(){
      return (
         <div className={style.container}>
  
            <div>
              <h3>Users</h3>
              {this._usersItem()}
  
              <div className={style.showMore}>
                <button> Show more </button>
              </div>
            </div>
  
         </div>
      )
   } 
}

export default Users;