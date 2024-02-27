import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tableSlice from './slices/tableSlice'
import paginationSlice from './slices/paginationSlice'
import debouncedInputValuesSlice from './slices/debouncedInputValuesSlice'
import preloaderStateSlice from './slices/preloaderStateSlice'

const rootReducer = combineReducers({
  table: tableSlice,
  pagination: paginationSlice,
  debouncedInputValues: debouncedInputValuesSlice,
  preloaderState: preloaderStateSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
