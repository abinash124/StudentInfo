import {createStore, combineReducers,  compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore'
import fireBaseConfig from './config'

import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'

//Reducer

// @todo

//Configuration for firebase


// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

//Initialize firebase
firebase.initializeApp(fireBaseConfig);

//Initialize firestore
//const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})


// Create store with reducers and initial state (react-redux-firebase
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    //reactReduxFirebase(firebase),
    window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



));

export default store;