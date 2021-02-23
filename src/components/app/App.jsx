import style from './App.module.css';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs';
import News from '../news/News';
import Music from '../music/Music';
import Settings from '../settings/Settings';
import { Route } from 'react-router-dom';

function App(props) {
    return ( 

      <div className={style.container}>
      
        <Header/>
        <Navbar/>

        <div className={style.main_content}>

          <Route path='/profile'>
            <Profile
             profilePage={props.store.state.profilePage} 
             setPost={props.store.setPost.bind(props.store)} 
             setNewPostText={props.store.setNewPostText.bind(props.store)}/>
          </Route>
          
          <Route path='/dialogs'>
            <Dialogs
             dialogPage={props.store.state.dialogPage}
             setMessage={props.store.setMessage.bind(props.store)}
             setNewMessageText={props.store.setNewMessageText.bind(props.store)}/>
          </Route>

          <Route path='/news'><News/></Route>
          <Route path='/music'><Music/></Route>
          <Route path='/settings'><Settings/></Route>
        </div>

      </div>
    );                
}

export default App;