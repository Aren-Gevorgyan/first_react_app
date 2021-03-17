import React from 'react';
import style from './MyStatus.module.css';

class MyStatus extends React.Component{

    componentDidUpdate(prevProps, prevState){
          if(prevProps.status !== this.props.status){
              console.log(prevProps.status);
              this.setState({
                     status: this.props.status
              })
          }
    }

    state = {
        editMode: true,
        status: this.props.status
    }

    editStatus = () => {
       this.setState({
           editMode: !this.state.editMode,
       })
       if(this.state.editMode === false){
           this.props.upgradeStatus(this.state.status);
       }
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
                 !this.state.status? <span>Write your status</span> : <span>{this.props.status}</span>:
                 <input onChange={this.getCurrentValue} autoFocus={true} defaultValue={this.props.status}/>         
              }          
              <button onClick={this.editStatus}>SetStatus</button>
            </div>
        )
    }
}

export default MyStatus;