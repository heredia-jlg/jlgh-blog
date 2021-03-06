import { createStore } from 'redux';

const initialState = {
  posts: [],
  tags: [],
  currentPage: '',
  currentPageDescription: '',
  user: {username:'', password:'', usertype:''}
};

function blogReducer(state = initialState, action) {
    switch(action.type) {
        case 'login':
            return Object.assign({}, state, {username: '', password:'', user: action.user})
        case 'handleLike':
            return Object.assign({}, state, {like: action.like})
        case 'handleComment':
            return Object.assign({}, state, {comment: action.comment})
        case 'showAll':
            console.log('Store - showAll')
            return Object.assign({}, state, {posts: action.posts})
        case 'setCurrentPage':
            console.log('store - currentPageChange : ' + action.currentPage)
            return Object.assign({}, state, {currentPage: action.currentPage})
        default:
            return state;
    }
}

let store = createStore(blogReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
