import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import tasksReducer from './reducers/tasksSlice';
import usersReducer from './reducers/usersSlice';
import contentsReducer from './reducers/tasksContentSlice';

const RootReducer = combineReducers({
  tasksReducer,
  usersReducer,
  contentsReducer,
});

const setupStore = () => configureStore({
  reducer: RootReducer,

});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
export default setupStore;
