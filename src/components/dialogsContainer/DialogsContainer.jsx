import {addMessages} from "../../store/reduce/dialogReduce";
import Dialogs from './dialogs/Dialogs';
import {connect} from 'react-redux';
import React from 'react';
import withRedirect from '../hoc/withRedirect';
import { compose } from "redux";
import {getPerson, getMessages, ifAuth} from '../../store/reduce/dialog_selector';

class DialogsContainer extends React.Component{
    render (){
        return <Dialogs {...this.props}> <h1>children </h1> </Dialogs>
    }
}

const mapStateToProps = (state) => {
    return {
       arrayPerson: getPerson(state),
       arrayMessages: getMessages(state),
       ifAuth: ifAuth(state),
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
    connect(mapStateToProps, {addMessages}),
)(DialogsContainer);