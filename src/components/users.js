import React from 'react';
import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
return (

  <List {...props}>
  {isSmall ? (
    <SimpleList
            primaryText={(record) => record.name}
            secondaryText={(record) => record.username}
            tertiaryText={(record) => record.email}
        />
  ) : (
    <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        {/* <TextField source="username" /> */}
        <EmailField source="email" />
        {/* <TextField source="address.street" /> */}
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" />
    </Datagrid>
)}
  </List>
);
};
