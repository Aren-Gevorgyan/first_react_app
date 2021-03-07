import {connect} from 'react-redux';
import Users from "./users/Users";
import {
    createCurrentPageNumberAction,
    createFollowAction,
    createSetUsersAction,
    createTotalCountAction,
    createNewPagesAction,} from '../../store/reduce/usersReduce';


const mapStateToProps = (state) => {
    return{
        arrayUsers: state.usersPage.arrayUsers,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        countUsers: state.usersPage.countUsers,
        replacePage: state.usersPage.replacePage,
        disabledPrev: state.usersPage.disabledPrev,
        disabledNext: state.usersPage.disabledNext,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        following: (follow, currentId) => {
            dispatch(createFollowAction(follow, currentId));
        },

        usersData: (usersData) => {
            dispatch(createSetUsersAction(usersData));
        },

        setTotalCount: (count) => {
           dispatch(createTotalCountAction(count))
        },

        setCurrentPageNumber: (p) => {
            dispatch(createCurrentPageNumberAction(p));
        },
        setNewPagesNumber: (numberObj) => {
            dispatch(createNewPagesAction(numberObj));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;