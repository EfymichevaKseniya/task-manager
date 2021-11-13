import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IndexTaskType } from '../../domain/task';

const fetchTasksContent = createAsyncThunk(
  'contents/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IndexTaskType[]>(
        'http://localhost:5000/contents'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить задачи');
    }
  }
);
export default fetchTasksContent;
