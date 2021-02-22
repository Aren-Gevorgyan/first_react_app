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
          <Route path='/profile'><Profile profilePage={props.state.profilePage} setPost={props.setPost}/></Route>
          <Route path='/dialogs'><Dialogs state={props.state.dialogPage}/></Route>
          <Route path='/news'><News/></Route>
          <Route path='/music'><Music/></Route>
          <Route path='/settings'><Settings/></Route>
        </div>

      </div>
    );                
}

export default App;