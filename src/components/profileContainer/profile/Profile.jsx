import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import * as axios from 'axios';
import Loading from '../../common/loading/Loading';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

class Profile extends React.Component{

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
          console.log(response)
       this.props.profileData(response.data);
    })
  }
   
  render(){

   return !this.props.profile ? <Loading/> : 

     <div className={style.container}>
  
        <DescriptionPerson profile={this.props.profile}/> 
        <MyPosts
          arrayPosts={this.props.arrayPosts}
          newPostText={this.props.newPostText}
          addPost={this.props.addPost}
          upgradePostText={this.props.upgradePostText}/>

     </div> 
   
  }
}

export default Profile;