//redux data store
import {createStore} from 'redux';
//Creates a Redux store that holds the complete state tree of your app.
import {Reducer} from './reducer';

const store = createStore(Reducer); //pass in reducers to createStore

//redux methods
export const Dispatch = store.dispatch;
//used to hold payload / Dispatches an action.
//This is the only way to trigger a state change.
export const Subscribe = store.subscribe;
//Adds a change listener. It will be called any time an action is
//dispatched, and some part of the state tree may potentially have changed.
export const GetState = store.getState;
//Returns the current state tree of your application
