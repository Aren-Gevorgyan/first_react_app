import {createActionAddMessages, createActionSetMessagesText} from "../../store/reduce/dialogReduce";
import Dialogs from './dialogs/Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
       arrayPerson: state.dialogPage.arrayPerson,
       arrayMessages: state.dialogPage.arrayMessages,
       newMessageText: state.dialogPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessages: () => {
             dispatch(createActionAddMessages())
        },

        upgradeMessagesText: (text) => {
             dispatch(createActionSetMessagesText(text))
        }
    }
} 

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;