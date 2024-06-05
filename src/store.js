import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './redux/reducers/userReducers'
import { jobPostReducer } from './redux/reducers/gatePassPostReducer';

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    jobpost: jobPostReducer,
})

let initialState = {
    user: {
        name: '',
        email: '',
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;