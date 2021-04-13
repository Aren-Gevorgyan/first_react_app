import React, {Suspense} from 'react';
import style from './App.module.css';
import HeaderContainer from '../../headerContainer/HeaderContainer'
import NavbarContainer from '../../navbarContainer/NavbarContainer';
import DialogsContainer from '../../dialogsContainer/DialogsContainer';
import Settings from '../../settings/Settings';
import { Route } from 'react-router-dom';
import LoginContainer from '../../loginContainer/LoginContainer';
import Loading from '../../common/loading/Loading';

const ProfileContainer = React.lazy(() => import('../../profileContainer/ProfileContainer'));
const UsersContainer = React.lazy(() => import('../../usersContainer/UsersContainer'));
const News = React.lazy(() => import('../../news/News'));
const Music = React.lazy(() => import('../../music/Music'));

const App = (props) => {
    return ( 

      <div className={style.container}>
      
        <HeaderContainer />
        <NavbarContainer/>

        <div className={style.main_content}>
         
          <Route path='/profile/:userId?'>
            <Suspense fallback={Loading}>
              <ProfileContainer/>
            </Suspense>
          </Route>
          
          <Route path='/dialogs'>
            <DialogsContainer/>
          </Route>

          <Route path='/users'>
            <Suspense fallback={Loading}>
              <UsersContainer/>
            </Suspense>
          </Route>
          
          <Route path='/login'>
            <LoginContainer/>
          </Route>

          <Route path='/news'>
            <Suspense fallback={Loading}>
              <News/>
            </Suspense>
          </Route>

          <Route path='/music'>
            <Suspense fallback={Loading}>
              <Music/>
            </Suspense>
           </Route>

          <Route path='/settings'><Settings/></Route>
        </div>

      </div>
    );                
}

export default App;