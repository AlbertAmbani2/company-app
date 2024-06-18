// pages/Admin/AdminPage.js

import React from 'react';
import { Route } from 'react-router-dom';
import { Admin, Resource, Layout, AppBar, UserMenu, MenuItemLink } from 'react-admin';
import restProvider from 'ra-data-json-server';
import { UserList } from '../../components/users';
import { TaskList, TaskEdit, TaskCreate } from '../../components/tasks';
import { Dashboard } from './Dashboard';
import UserIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';
import ExitIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../../context/AuthContext';
import { RoleProvider } from '../../context/RoleContext';
import ManageRoles from '../../components/Manager/ManageRoles';

const dataProvider = restProvider('https://jsonplaceholder.typicode.com');

const MyLogoutButton = () => {
  const { logout } = useAuth();
  return (
    <MenuItemLink
      to="/" // Redirect to homepage
      primaryText="Logout"
      leftIcon={<ExitIcon />}
      onClick={logout}
    />
  );
};

const MyAppBar = (props) => (
  <AppBar {...props} userMenu={<UserMenu><MyLogoutButton /></UserMenu>} />
);

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const AdminApp = () => (
<RoleProvider>
  <Admin dashboard={Dashboard} dataProvider={dataProvider} layout={MyLayout}>
    <Resource
      name="users"
      list={UserList}
      icon={UserIcon}
    />
    <Resource
      name="posts"
      list={TaskList}
      edit={TaskEdit}
      create={TaskCreate}
      icon={TaskIcon}
      options={{ label: 'Tasks' }}
    />
	<Route path="/manage-roles" element={<ManageRoles />} />
  </Admin>
</RoleProvider>
);

export default AdminApp;
