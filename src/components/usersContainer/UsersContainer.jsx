import {connect} from 'react-redux';
import Users from "./users/Users";
import {createFollowAction} from '../../store/reduce/usersReduce';


const mapStateToProps = (state) => {
    return{
        arrayUsers: state.usersPage.arrayUsers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow: (follow) => {
            dispatch(createFollowAction(follow));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;