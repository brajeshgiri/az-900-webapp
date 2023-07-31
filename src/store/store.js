import { createStore } from 'redux'
import rootReducer from './rootReducers';

const store = createStore(rootReducer);
window.__STORE= store;
export default store;