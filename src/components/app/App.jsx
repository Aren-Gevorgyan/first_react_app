import style from './App.module.css';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs';
import News from '../news/News';
import Music from '../music/Music';
import Settings from '../settings/Settings';
import { Route } from 'react-router-dom';

function App() {
    return ( 

      <div className={style.container}>
      
        <Header/>
        <Navbar/>

        <div className={style.main_content}>
          {/* get path */}
          <Route exact path='/profile'><Profile/></Route>
          <Route exact path='/dialogs'><Dialogs/></Route>
          <Route exact path='/news'><News/></Route>
          <Route exact path='/music'><Music/></Route>
          <Route exact path='/settings'><Settings/></Route>
        </div>

      </div>
    );                
}

export default App;