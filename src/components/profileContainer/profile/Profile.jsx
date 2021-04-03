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
          addPost={this.props.addPost}/>

     </div> 
   )
  }
}

export default Profile;