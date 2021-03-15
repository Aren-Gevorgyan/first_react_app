import {connect} from 'react-redux';
import Users from "./users/Users";
import React from 'react';
import {Redirect} from 'react-router-dom';
import withRedirect from '../hoc/withRedirect';

import {
      setNewPagesNumber, setDisabledPrev, setDisabledNext,
      followThunk, unFollowThunk, getUsersThunk, getNewUsersThunk} from '../../store/reduce/usersReduce';

class UsersContainer extends React.Component {

        componentDidMount(){
          this.props.getUsersThunk(this.props.currentPage, this.props.countUsers);
        }

        render(){
            return <Users {...this.props}/>
        }
}     

const mapStateToProps = (state) => {
    return{
        arrayUsers: state.usersPage.arrayUsers,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers,
        replacePage: state.usersPage.replacePage,
        disabledPrev: state.usersPage.disabledPrev,
        disabledNext: state.usersPage.disabledNext,
        disabledFollowButton: state.usersPage.disabledFollowButton,
        loading: state.usersPage.loading,
    }
}

const WithRedirectUsersContainer = withRedirect(UsersContainer); 

export default connect(mapStateToProps, 
     {setNewPagesNumber, setDisabledPrev, setDisabledNext,
      getUsersThunk, followThunk, unFollowThunk,
      getNewUsersThunk
     })(WithRedirectUsersContainer);

