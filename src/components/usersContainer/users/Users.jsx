import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';
import Paginator from './paginator/Paginator';
import * as axios from 'axios';
import Loading from '../../common/loading/Loading';

class Users extends React.Component {

   componentDidMount(){
      this.props.setLoading(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsers}`, {withCredentials: true})
           .then(response => {
         this.props.usersData(response.data.items);
         this.props.setTotalCount(response.data.totalCount);
         this.props.setLoading(false);
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

         this.props.loading ? <Loading/> : 

         <div className={style.container}>
              
            <Paginator 
               totalCount={this.props.totalCount}
               countUsers={this.props.countUsers}
               currentPage={this.props.currentPage}
               usersData={this.props.usersData}
               setCurrentPageNumber={this.props.setCurrentPageNumber}
               replacePage={this.props.replacePage}
               setNewPagesNumber={this.props.setNewPagesNumber}
               disabledPrev={this.props.disabledPrev}
               disabledNext={this.props.disabledNext}
               setDisabledPrev={this.props.setDisabledPrev}
               setDisabledNext={this.props.setDisabledNext}
               loading={this.props.loading}
               setLoading={this.props.setLoading}/>

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