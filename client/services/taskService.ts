import axios from 'axios';
import { TaskType } from '../domain/task';

const taskService = {
  path: 'http://localhost:5000/',

  list() {
    return axios.get<TaskType[]>(`${this.path}tasks`);
  },
};

export default taskService;
