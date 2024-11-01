export const server = "http://localhost:8000";

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import counterReducer from './counter/counter';
import  userReducer  from './counter/user';
import  generalState  from './counter/generaldata';
import picture from './counter/picture';
// import postReducer from './reducer/index'; // Uncomment and use if you have more reducers

// Combine your reducers
const rootReducer = combineReducers({
  users: userReducer,
  // post: postReducer,
  generalState: generalState,
  picdata : picture,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Export the persistor
export const persistor = persistStore(store);
