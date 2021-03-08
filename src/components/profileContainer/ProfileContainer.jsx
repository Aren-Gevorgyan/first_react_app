import {addPost, upgradePostText, profileData} from "../../store/reduce/profileReduce";
import Profile from './profile/Profile';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return {
         arrayPosts: state.profilePage.arrayPosts,
         newPostText: state.profilePage.newPostText,
         profile: state.profilePage.profile,
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         addPost: () => {
//             dispatch(createActionAddPost())
//         },
//         upgradePostText: (text) => {
//             dispatch(createActionSetPostText(text))
//         },
//     }
// }

const ProfileContainer = connect(mapStateToProps, {addPost, upgradePostText, profileData})(Profile);

export default ProfileContainer;