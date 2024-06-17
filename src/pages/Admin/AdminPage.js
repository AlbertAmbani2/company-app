import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '../../providers/authProvider';
import { Dashboard } from './Dashboard'
import { UserList } from '../../components/users';
import { TaskList, TaskEdit, TaskCreate } from '../../components/tasks';
import UserIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminPage = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
    <Resource name="users" list={UserList} icon={UserIcon}/>
    <Resource
      name="tasks"
      list={TaskList}
      edit={TaskEdit}
      create={TaskCreate}
	  icon={TaskIcon}
    />
  </Admin>
);

export default AdminPage;