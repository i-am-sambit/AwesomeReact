
import { combineReducers } from 'redux';

import AllTaskReducer from './AllTaskReducer';

export default combineReducers({

    allTask: AllTaskReducer,
});