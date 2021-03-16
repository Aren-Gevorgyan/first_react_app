import React from 'react';
import style from './MyStatus.module.css';

class MyStatus extends React.Component{
    state = {
        editMode: true,
    }

    editStatus = () => {
       this.setState({
           editMode: !this.state.editMode,
       })
    }

    render(){
        return (
            <div className={style.container}>

              {this.state.editMode?
              <input autoFocus={true} value={this.props.status}/>:
              
              <span>{this.props.status}</span>
              }          
              <button onClick={this.editStatus}>SetStatus</button>
            </div>
        )
    }
}

export default MyStatus;