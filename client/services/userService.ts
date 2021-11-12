import axios from 'axios';
import { UserType } from '../domain/user';

const userService = {
  path: 'http://localhost:5000/',

  list() {
    return axios.get<UserType[]>(`${this.path}users`);
  },

  addUser(user: UserType) {
    return axios.post<UserType>(`${this.path}users`, {
      user,
    });
  },
};

export default userService;
