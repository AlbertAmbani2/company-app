import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-json-server';
import { UserList } from '../../components/users';
import { TaskList, TaskEdit, TaskCreate } from '../../components/tasks';


const dataProvider = restProvider('https://jsonplaceholder.typicode.com');

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      
    />
    <Resource
      name="tasks"
      list={TaskList}
      edit={TaskEdit}
      create={TaskCreate}
      
    />
  </Admin>
);

export default AdminApp;
