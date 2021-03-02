import React from 'react';
import {createActionAddMessages, createActionSetMessagesText} from "../../store/reduce/dialogReduce";
import Dialogs from './dialogs/Dialogs';

const DialogsContainer = (props) => {

    const addMessages = () => {
        props.dispatch(createActionAddMessages());
    }

    const upgradeMessagesText = (text) => {
        props.dispatch(createActionSetMessagesText(text));
    }
    return(<Dialogs
            arrayPerson={props.dialogPage.arrayPerson}
            newMessageText={props.dialogPage.newMessageText}
            messages={props.dialogPage.arrayMessages}
            addMessages={addMessages}
            upgradeMessagesText={upgradeMessagesText}/>
    )
}

export default DialogsContainer;