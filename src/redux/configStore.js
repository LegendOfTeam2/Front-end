import { configureStore, combineReducers } from '@reduxjs/toolkit';
import member from './modules/member'

const rootReducer = combineReducers({ member });

const store = configureStore({ reducer: rootReducer });

export default store;