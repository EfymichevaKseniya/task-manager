import { createAsyncThunk } from '@reduxjs/toolkit';
import taskService from '../../services/taskService';

const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      // service.task.list
      const response = await taskService.list(); // вернул дату
      // adapter -> return adapterBlabla(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить задачи');
    }
  },
);
export default fetchTasks;
