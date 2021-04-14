import React, {PureComponent} from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

class Profile extends PureComponent{

  render(){
   return (

     <div className={style.container}>
  
        <DescriptionPerson profile={this.props.profile} status={this.props.status}
                           upgradeStatus={this.props.setStatusThunk} upgradePhoto={this.props.upgradePhoto}
                           pathUserId={this.props.pathUserId} userId={this.props.userId}/> 
        <MyPosts
          arrayPosts={this.props.arrayPosts}
          addPost={this.props.addPost}/>

     </div> 
   )
  }
}

export default Profile;