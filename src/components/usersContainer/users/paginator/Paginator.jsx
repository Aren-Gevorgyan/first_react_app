import React from 'react';
import style from './Paginator.module.css';
import Loading from '../../../common/loading/Loading';

const Paginator = (props) => {

    //get count page
    const countPage = Math.ceil(props.totalCount / props.countUsers);
    let pageFirst = props.replacePage.numberFirst;
    let pageSecond = props.replacePage.numberSecond;

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
            const ifPageNumberLessOfOne = pageFirst <= 1;
            const ifNoPageNumber = totalCount <= pageSecond;

            if(ifPageNumberLessOfOne){ 
               props.setDisabledPrev(true);
            }else if(ifNoPageNumber){
              props.setDisabledNext(true);
            }
      }

    }(pageFirst, pageSecond, countPage);

    const getUsers = (p, props) => {
          //get new five users
          props.getNewUsersThunk(p, props.countUsers);
    }
      
    let numbersArray = countPageArray.map( page => {
                          return <span onClick={()=> {getUsers(page, props)}} 
                                       key={page}
                                       style={page === props.currentPage ? {color: "black", backgroundColor: "#9AC895"}: {}}>
                                       {page}
                                 </span>
                       })
    
    // add parameters to work with pure function
    let prev = (props, pageSecond) => {
      props.setDisabledNext(false);
      props.setNewPagesNumber(
        { numberFirst: pageSecond - 7,
          numberSecond: pageSecond - 4
        })
    }

    let next = (props, pageSecond) => {
      props.setDisabledPrev(false);
      props.setNewPagesNumber(
        { numberFirst: ++pageSecond,
          numberSecond: pageSecond + 3
        })
    }  

    return (
         props.loading ? <Loading/> :
         <div className={style.container}>
           
            <div className={style.paginatorContainer}>
               <div>
                  <button onClick={()=>{prev(props, pageSecond)}} disabled={props.disabledPrev} className={style.previous}>prev</button>
                  <div>
                    {numbersArray}
                  </div>
                  <button onClick={()=>{next(props, pageSecond)}} disabled={props.disabledNext} className={style.next}>next</button>
               </div>
            </div>
         
         </div>
      )
    
}

export default Paginator;