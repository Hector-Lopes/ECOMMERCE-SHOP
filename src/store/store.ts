import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root.reducer'
//@ts-ignore
import storage from 'redux-persist/lib/storage'
//@ts-ignore
import persistReducer from 'redux-persist/es/persistReducer'
//@ts-ignore
import persistStore from 'redux-persist/es/persistStore'
import { thunk } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
)

// export const store = createStore(
//   persistedRootReducer,
//   applyMiddleware(logger, thunk)
// )
export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger) // Add your custom middleware here
})

export const persistedStore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
