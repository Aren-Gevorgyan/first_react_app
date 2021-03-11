import style from './App.module.css';
import HeaderContainer from '../../headerContainer/HeaderContainer'
import NavbarContainer from '../../navbarContainer/NavbarContainer';
import ProfileContainer from '../../profileContainer/ProfileContainer';
import DialogsContainer from '../../dialogsContainer/DialogsContainer';
import UsersContainer from '../../usersContainer/UsersContainer';
import News from '../../news/News';
import Music from '../../music/Music';
import Settings from '../../settings/Settings';
import { Route } from 'react-router-dom';

const App = (props) => {
  
    return ( 

      <div className={style.container}>
      
        <HeaderContainer />
        <NavbarContainer/>

        <div className={style.main_content}>
         
          <Route path='/profile/:userId?'>
            <ProfileContainer/>
          </Route>
          
          <Route path='/dialogs'>
            <DialogsContainer/>
          </Route>

          <Route path='/users'>
            <UsersContainer/>
          </Route>

          <Route path='/news'><News/></Route>
          <Route path='/music'><Music/></Route>
          <Route path='/settings'><Settings/></Route>
        </div>

      </div>
    );                
}

export default App;