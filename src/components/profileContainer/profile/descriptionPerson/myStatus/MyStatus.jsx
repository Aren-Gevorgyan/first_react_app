import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './MyStatus.module.css';
import ReduxForm from '../../../../common/oneForm/ReduxForm';

const AppendNewStatus = reduxForm({form: "status"})(ReduxForm);

class MyStatus extends React.Component{

    componentDidUpdate(prevProps, prevState){
          if(prevProps.status !== this.props.status){
              this.setState({
                     status: this.props.status
              })
          }
    }

    state = {
        editMode: true,
        status: this.props.status,
    }

    editStatus = () => {
       this.setState({
           editMode: !this.state.editMode,
       })   
    }

    writeNewStatus = (statusText) => {
        if(this.state.editMode === false){
            this.props.upgradeStatus(statusText.status);
        }
        this.editStatus();
    }

    getCurrentValue = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render(){
        return (
            <div className={style.container}>

              {this.state.editMode?
                 !this.state.status? <div>
                                        <span>Write your status</span> 
                                        <button onClick={this.editStatus}>SetStatus</button>
                                     </div>:

                                     <div>
                                        <span>{this.props.status}</span>
                                        <button onClick={this.editStatus}>SetStatus</button>
                                     </div> :
                 <AppendNewStatus onSubmit={this.writeNewStatus}/>
              }          
            </div>
        )
    }
}

export default MyStatus;