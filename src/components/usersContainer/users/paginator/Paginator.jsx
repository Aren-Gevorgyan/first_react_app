import React from 'react';
import style from './Paginator.module.css';
import * as axios from 'axios';

const Paginator = (props) => {

    //get count page
    const countPage = Math.ceil(props.totalCount / props.countUsers);
    let pageFirst = props.replacePage.numberFirst;
    let pageSecond = props.replacePage.numberSecond;


    // add parameters to work with pure function
    let countPageArray = function(pageFirst, pageSecond, countPage) {

      let numbersArray = [];
      for (let i = 1; i <= countPage; i++){
          if(pageFirst > pageSecond){
              break;
          }else{
            disabledButton(props, pageFirst, pageSecond, props.totalCount);
            numbersArray.push(pageFirst++)          
          }
      }
      return numbersArray;

      function disabledButton(props, pageFirst, pageSecond, totalCount) {
            const ifPageNumberLessOfOne = pageFirst === 1;
            const ifPageNumberMoreOfOne = totalCount < pageSecond;

            if(ifPageNumberLessOfOne){ 
               props.setDisabledPrev(true);
            }

            if(ifPageNumberMoreOfOne){
              props.setDisabledNext(true);
            }
      }

    }(pageFirst, pageSecond, countPage);

    const getUsers = (p) => {
          //get new five users
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.countUsers}`).then(response => {
            props.usersData(response.data.items);
          })
          props.setCurrentPageNumber(p);
    }

    let numbersArray = countPageArray.map( page => {
                          return <span onClick={()=> {getUsers(page)}} key={page}>{page}</span>
                       })
    
    // add parameters to work with pure function
    let next = (props, pageSecond) => {
      props.setDisabledPrev(false);
      props.setNewPagesNumber(
        { numberFirst: pageSecond - 7,
          numberSecond: pageSecond - 4
        })
    }

    // add parameters to work with pure function
    let prev = (props, pageSecond) => {
      props.setDisabledPrev(false);
      props.setNewPagesNumber(
        { numberFirst: ++pageSecond,
          numberSecond: pageSecond + 3
        })
    }  

    return (
         <div className={style.container}>
           
            <div className={style.paginatorContainer}>
               <div>
                  <button onClick={()=>{next(props, pageSecond)}} disabled={props.disabledPrev} className={style.previous}>prev</button>
                  <div>
                    {numbersArray}
                  </div>
                  <button onClick={()=>{prev(props, pageSecond)}} disabled={props.disabledNext} className={style.next}>next</button>
               </div>
            </div>
         
         </div>
      )
    
}

export default Paginator;