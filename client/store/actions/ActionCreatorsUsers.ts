import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../services/userService';
import { UserType } from '../../domain/user';

const fetchUsers = createAsyncThunk('users/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await userService.list();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});
export default fetchUsers;

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (user: UserType, thunkAPI) => {
    try {
      const response: any = await userService
        .addUser(user)
        .then((data) => data);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось создать пользователя');
    }
  }
);
