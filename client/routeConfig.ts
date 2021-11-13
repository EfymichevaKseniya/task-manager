import Index from './pages/Index/Index';
import Tasks from './pages/Tasks/Tasks';
import PageNotFound from './pages/404/404';
import Auth from './pages/Auth/Auth';
import Users from './pages/Users/Users';
import NewTask from './pages/New-task/NewTask';
import NewUser from './pages/New-User/NewUser';

export type RoutesType = {
  routes: {
    path: string;
    component: () => JSX.Element;
  };
};

const routes = [
  {
    path: '/index',
    component: Index,
  },
  {
    path: '/tasks',
    component: Tasks,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/404',
    component: PageNotFound,
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/new-task',
    component: NewTask,
  },
  {
    path: '/new-user',
    component: NewUser,
  },
  // {
  //   path: '/profile',
  //   component: Profile,
  // },
];

export default routes;
