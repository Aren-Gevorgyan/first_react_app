import React from 'react';
import style from './Paginator.module.css';
import * as axios from 'axios';

const Paginator = (props) => {

    let countPageArray = function() {

      const countPage = Math.ceil(props.totalCount / props.countUsers); // 10600
      let numbersArray = [];
      for (let i = 1; i <= countPage; i++){
          if(i > 4){
              break;
          }else{
            numbersArray.push(i)
          }
      }
      return numbersArray;

    }()

    const getUsers = (p) => {
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${5}`).then(response => {
            props.usersData(response.data.items);
          })
          props.setCurrentPageNumber(p);
    }

    let numbersArray = countPageArray.map( page => {
                          return <span onClick={()=> {getUsers(page)}} key={page}>{page}</span>
                       })

    return (
         <div className={style.container}>
           
            <div className={style.paginatorContainer}>
               <div>
                  <button className={style.previous}>prev</button>
                  <div>
                    {numbersArray}
                  </div>
                  <button className={style.next}>next</button>
               </div>
            </div>
         
         </div>
      )
    
}

export default Paginator;