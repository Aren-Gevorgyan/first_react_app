import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';
import Paginator from './paginator/Paginator';
import * as axios from 'axios';

class Users extends React.Component {

   componentDidMount(){
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsers}`)
           .then(response => {
         debugger
         this.props.usersData(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
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

            <Paginator 
               totalCount={this.props.totalCount}
               countUsers={this.props.countUsers}
               usersData={this.props.usersData}
               setCurrentPageNumber={this.props.setCurrentPageNumber}
               replacePage={this.props.replacePage}
               setNewPagesNumber={this.props.setNewPagesNumber}
               disabledPrev={this.props.disabledPrev}
               disabledNext={this.props.disabledNext}
               setDisabledPrev={this.props.setDisabledPrev}
               setDisabledNext={this.props.setDisabledNext}/>

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