import renderApp from "./render/render";
import state, { setPost, setMessage } from './state/state';

renderApp(state, setPost, setMessage);