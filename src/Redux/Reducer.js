import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import RegisterReducer from './reducer_register';

const rootReducer = combineReducers({
 form : FormReducer,
 register : RegisterReducer
});

export default rootReducer;
