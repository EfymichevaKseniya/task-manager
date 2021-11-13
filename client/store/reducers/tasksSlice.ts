import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../domain/task';
import fetchTasks from '../actions/ActionCreatorsTasks';

interface TaskState {
  tasks: TaskType[];
  isLoading: boolean;
  error: string;
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  error: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTasks.fulfilled.type]: (state, action: PayloadAction<TaskType[]>) => {
      state.isLoading = false;
      state.error = '';
      state.tasks = action.payload;
    },
    [fetchTasks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTasks.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default tasksSlice.reducer;
