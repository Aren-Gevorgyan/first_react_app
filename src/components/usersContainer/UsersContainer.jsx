import {connect} from 'react-redux';
import Users from "./users/Users";
import {
    createCurrentPageNumberAction,
    createFollowAction,
    createSetUsersAction,
    createTotalCountAction,
    createNewPagesAction,
    createDisabledPrevAction,
    createDisabledNextAction,
    createLoadingAction} from '../../store/reduce/usersReduce';


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
        },

        setDisabledPrev: (disabled) => {
            dispatch(createDisabledPrevAction(disabled));
        },

        setDisabledNext: (disabled) => {
            dispatch(createDisabledNextAction(disabled));
        },

        setLoading: (loading) => {
            dispatch(createLoadingAction(loading));
        },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;