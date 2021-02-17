import style from './App.module.css';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import Dialogs from '../dialogs/Dialogs';

function App() {
    return ( 

      <div className={style.container}>
      
        <Header/>
        <Navbar/>
        {/* <Dialogs/> */}
        <Profile/>

      </div>
    );                
}

export default App;