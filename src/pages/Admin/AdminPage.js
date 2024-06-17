import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-json-server';
import { UserList } from '../../components/users';
import { TaskList, TaskEdit, TaskCreate } from '../../components/tasks'; // Import from tasks.js
import { Dashboard } from './Dashboard';
import UserIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';

const dataProvider = restProvider('https://jsonplaceholder.typicode.com');

const AdminApp = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      icon={UserIcon}
    />
    <Resource
      name="posts" // JSONPlaceholder's endpoint for tasks
      list={TaskList}
      edit={TaskEdit}
      create={TaskCreate}
      icon={TaskIcon}
      options={{ label: 'Tasks' }}
    />
  </Admin>
);

export default AdminApp;
