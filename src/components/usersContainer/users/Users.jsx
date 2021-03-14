import React from 'react';
import UsersItem from "./usersItem/UsersItem";
import style from './Users.module.css';
import Paginator from './paginator/Paginator';
import Loading from '../../common/loading/Loading';

const Users = (props) => {

      let usersItem = props.arrayUsers.map(value => {
         return <UsersItem 
                   key={value.id} 
                   id={value.id} 
                   name={value.name} 
                   photo={value.photo}
                   status={value.status}
                   follow={value.followed}
                   disabledFollowButton={props.disabledFollowButton}
                   followThunk={props.followThunk}
                   unFollowThunk={props.unFollowThunk}
                   />
      })

      return (

         props.loading ? <Loading/> : 

         <div className={style.container}>
              
            <Paginator 
               totalCount={props.totalCount}
               countUsers={props.countUsers}
               currentPage={props.currentPage}
               usersData={props.usersData}
               setCurrentPageNumber={props.setCurrentPageNumber}
               replacePage={props.replacePage}
               setNewPagesNumber={props.setNewPagesNumber}
               disabledPrev={props.disabledPrev}
               disabledNext={props.disabledNext}
               setDisabledPrev={props.setDisabledPrev}
               setDisabledNext={props.setDisabledNext}
               loading={props.loading}
               setLoading={props.setLoading}/>

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