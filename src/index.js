import renderApp from "./render/render";
import state, { setPost, setMessage, setNewPostText } from './state/state';

renderApp(state, setPost, setMessage, setNewPostText);