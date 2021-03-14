import {addMessages, upgradeMessagesText} from "../../store/reduce/dialogReduce";
import Dialogs from './dialogs/Dialogs';
import {connect} from 'react-redux';
import React from 'react';
import {Redirect} from 'react-router-dom';


class DialogsContainer extends React.Component{
    render (){
        return this.props.ifAuth? 
        <Dialogs {...this.props}/>
        :
        <Redirect to='/login'/>
    }
}

const mapStateToProps = (state) => {
    return {
       arrayPerson: state.dialogPage.arrayPerson,
       arrayMessages: state.dialogPage.arrayMessages,
       newMessageText: state.dialogPage.newMessageText,
       ifAuth: state.auth.ifAuth,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessages: () => {
//              dispatch(createActionAddMessages())
//         },

//         upgradeMessagesText: (text) => {
//              dispatch(createActionSetMessagesText(text))
//         }
//     }
// } 

export default connect(mapStateToProps, {addMessages, upgradeMessagesText})(DialogsContainer);