import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IndexTaskType } from '../../domain/task';
import fetchTasksContent from '../actions/ActionCreatorsContent';

interface TaskContentState {
  contents: IndexTaskType[];
  isLoading: boolean;
  error: string;
}

const initialState: TaskContentState = {
  contents: [],
  isLoading: false,
  error: '',
};

const tasksContentSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTasksContent.fulfilled.type]: (
      state,
      action: PayloadAction<IndexTaskType[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.contents = action.payload;
    },
    [fetchTasksContent.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTasksContent.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default tasksContentSlice.reducer;
