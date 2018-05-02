//ROOT reducer.
import  {combineReducers} from 'redux';
import packageReducer from './packageReducer';

export default combineReducers({
    package: packageReducer
});