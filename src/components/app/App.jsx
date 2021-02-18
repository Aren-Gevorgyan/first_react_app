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
          <Route path='/profile'><Profile posts={props.posts}/></Route>
          <Route path='/dialogs'><Dialogs dialogsPerson={props.dialogsPerson} messages={props.messages}/></Route>
          <Route path='/news'><News/></Route>
          <Route path='/music'><Music/></Route>
          <Route path='/settings'><Settings/></Route>
        </div>

      </div>
    );                
}

export default App;