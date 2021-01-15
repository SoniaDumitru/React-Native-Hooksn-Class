import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

// called only by React directly when dispatch is called
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return { ...state, errorMessage: action.payload }
        default: 
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        // make an api request to sign up with that email and password
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data)
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with the signup'})
        }
        // if we sign up, modify our state and say that we are authenticated

        // if signinup fails we refactor an error message
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // make an api request to sign up with that email and password

        // if we sign up, modify our state and say that we are authenticated

        // if signinup fails we refactor an error message
    }
};

const signout = (dispatch) => {
    return ({ email, password }) => {
        // somehow signout
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false, errorMessage: '' }
);