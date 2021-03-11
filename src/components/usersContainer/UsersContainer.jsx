import {connect} from 'react-redux';
import Users from "./users/Users";
import React from 'react';
import {userApi} from '../../dal/api';

import {
      following, setLoading, setNewPagesNumber, setCurrentPageNumber,
      setDisabledPrev, setDisabledNext, usersData, setTotalCount} from '../../store/reduce/usersReduce';

class UsersContainer extends React.Component {

        componentDidMount(){
           this.props.setLoading(true);
           userApi.getUsers(this.props.currentPage, this.props.countUsers)
                .then(data => {
              this.props.usersData(data.items);
              this.props.setTotalCount(data.totalCount);
              this.props.setLoading(false);
           })
        
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
        loading: state.usersPage.loading,
    }
}

export default connect(mapStateToProps, 
     {following, setLoading, setNewPagesNumber, setCurrentPageNumber,
      setDisabledPrev, setDisabledNext, usersData, setTotalCount})(UsersContainer);

