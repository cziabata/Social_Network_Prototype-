const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_BUTTON_FETCHING = "TOGGLE_BUTTON_FETCHING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledUsers: []
}

export let users_reducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId) {
                        return {
                            ...users,
                            followed: true
                        }
                    }
                    return users;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if(users.id === action.userId) {
                        return {
                            ...users,
                            followed: false
                        }
                    }
                    return users;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersNumber
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_BUTTON_FETCHING:
            return {
                ...state,
            }
        default: 
            return state;
    }
}

export const followUser = (userId) => ({type: FOLLOW, userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (usersNumber) => ({type: SET_TOTAL_USERS_COUNT, usersNumber});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
