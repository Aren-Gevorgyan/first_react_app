import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';
import Paginator from './paginator/Paginator';
import * as axios from 'axios';

class Users extends React.Component {

   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${5}&count=${5}`).then(response => {
         this.props.usersData(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
      })
   }

   // _getUsers(p){
   //    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${5}`).then(response => {
   //       this.props.usersData(response.data.items);
   //    })
   //    this.props.setCurrentPageNumber(p);
   // }

   // _pagination(){
   //    const countPage = Math.ceil((this.props.totalCount - 10542) / this.props.countUsers);
   //    let numbersArray = [];
   //    for (let i = 1; i <= countPage; i++){
   //        numbersArray.push(i);
   //    }
      
   //    numbersArray = numbersArray.map( page => {
   //        return <span onClick={()=> {this._getUsers(page)}} key={page}>{page}</span>
   //    })
   //    console.log(numbersArray)
   //    return numbersArray;
   // }

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

            <Paginator 
               totalCount={this.props.totalCount}
               countUsers={this.props.countUsers}
               usersData={this.props.usersData}
               setCurrentPageNumber={this.props.setCurrentPageNumber}/>

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