import {createStore , compose} from 'redux';
import {reducer} from './reducer';
import {loadState , saveState} from '../persiststate';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState =  loadState();

export let store = createStore(reducer,
    persistedState,
    composeEnhancer()
     );

     store.subscribe(()=>saveState(store.getState()))


  