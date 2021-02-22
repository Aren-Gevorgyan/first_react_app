import renderApp from "./render/render";
import state, { setPost, setMessage, setNewPostText, setNewMessageText } from './state/state';

renderApp(state, setPost, setMessage, setNewPostText, setNewMessageText);