import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../domain/user';
import fetchUsers, { addNewUser } from '../actions/ActionCreatorsUsers';

interface UserState {
  users: UserType[],
  isLoading?: boolean,
  error?: string,
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser(state, action) {
      state.users.push(action.payload);
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UserType[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addNewUser.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
