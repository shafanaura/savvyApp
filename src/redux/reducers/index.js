import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import chatReducer from './chat.reducer'

const persistConfigAuth = {
  key: 'auth',
  storage: AsyncStorage,
}

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer)

const reducers = combineReducers({
  auth: persistedReducerAuth,
  user: userReducer,
  chat: chatReducer,
})

export default reducers
