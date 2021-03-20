import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

class Profile extends React.Component{

  render(){
   return (

     <div className={style.container}>
  
        <DescriptionPerson profile={this.props.profile} status={this.props.status} upgradeStatus={this.props.setStatusThunk}/> 
        <MyPosts
          arrayPosts={this.props.arrayPosts}
          newPostText={this.props.newPostText}
          addPost={this.props.addPost}
          upgradePostText={this.props.upgradePostText}/>

     </div> 
   )
  }
}

export default Profile;