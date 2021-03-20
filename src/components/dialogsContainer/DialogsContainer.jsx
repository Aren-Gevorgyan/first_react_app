import {addMessages, upgradeMessagesText} from "../../store/reduce/dialogReduce";
import Dialogs from './dialogs/Dialogs';
import {connect} from 'react-redux';
import React from 'react';
import withRedirect from '../hoc/withRedirect';
import { compose } from "redux";

class DialogsContainer extends React.Component{
    render (){
        return <Dialogs {...this.props}> <h1>children </h1> </Dialogs>
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

export default compose(
    withRedirect,
    connect(mapStateToProps, {addMessages, upgradeMessagesText}),
)(DialogsContainer);