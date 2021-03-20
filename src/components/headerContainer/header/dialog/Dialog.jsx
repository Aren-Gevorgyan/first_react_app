import React from 'react';
import style from './Dialog.module.css';

class Dialog extends React.Component {

       state = {
           dialog: false,
       }

       openDialog = () => {
          this.setState({
              dialog: !this.state.dialog,    
          })
       }
       
       login(props, state){
           if(!props.profile){
               return <span className={style.login}> Login </span>
           }else{ 
               return(
                   <div className={style.logout}>
  
                     <h3> {props.profile.fullName} </h3>
                     <i className={[style.openDialog, `fas ${state.dialog? 'fa-caret-square-up' : 'fa-caret-square-down'}`].join(" ")} 
                        onClick={this.openDialog}/>
                     {this.createDialog(state)}
                   </div>
               ) 
           }

       }

       createDialog = (state) => {
           if(state.dialog){
              return(
                     <div className={style.dialog}>
                       <ul>
                           <li>
                               <i className={[style.logoutIcon, 'fas fa-file-export'].join(" ")}/>
                               <button onClick={this.logout}>Logout</button>
                            </li>
                       </ul>
                     </div> 
              )
            }
       }

       logout = () => {
             this.props.logout();
       }

       render(){
           return(
              <div>
                  {this.login(this.props, this.state)}
              </div>
           )
       }
}

export default Dialog;