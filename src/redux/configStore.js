import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './modules/user'

const rootReducer = combineReducers({ user });

const store = configureStore({ reducer: rootReducer });

export default store;