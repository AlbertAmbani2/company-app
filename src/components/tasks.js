import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, Create, required } from 'react-admin';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Task List Component
export const TaskList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton basePath="/tasks" />
            <DeleteButton basePath="/tasks" />
        </Datagrid>
    </List>
);

// Task Edit Component
export const TaskEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <TextInput source="body" validate={required()} multiline />
        </SimpleForm>
    </Edit>
);

// Task Create Component
export const TaskCreate = (props) => {
    const navigate = useNavigate();

    return (
        <Create {...props}>
            <SimpleForm>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate('/admin')}
                    sx={{ mb: 2 }}
                >
                    Back to Tasks
                </Button>
                <TextInput source="title" validate={required()} />
                <TextInput source="body" validate={required()} multiline />
            </SimpleForm>
        </Create>
    );
};