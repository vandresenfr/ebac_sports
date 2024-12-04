import { configureStore } from '@reduxjs/toolkit'

import favoritosReducer from './reducers/favoritos'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
