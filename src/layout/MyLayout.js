import React from 'react';
import { Layout, AppBar, LogoutButton } from 'react-admin';
//import MyMenu from './MyMenu';

const MyAppBar = (props) => (
    <AppBar {...props}>
        <LogoutButton />
    </AppBar>
);

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;
