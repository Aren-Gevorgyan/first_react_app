import {addMessages, upgradeMessagesText} from "../../store/reduce/dialogReduce";
import Dialogs from './dialogs/Dialogs';
import {connect} from 'react-redux';
import React from 'react';
import withRedirect from '../hoc/withRedirect';

class DialogsContainer extends React.Component{
    render (){
        return <Dialogs {...this.props}/>
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

const WithRouterDialogsContainer = withRedirect(DialogsContainer);

export default connect(mapStateToProps, {addMessages, upgradeMessagesText})(WithRouterDialogsContainer);