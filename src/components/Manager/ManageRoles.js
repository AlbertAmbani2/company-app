import React, { useState, useEffect } from 'react';
import { useRole } from '../../context/RoleContext';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import axios from 'axios';

const ManageRoles = () => {
  const { roles, assignRole, departments, createDepartment, moveEmployee, removeEmployee } = useRole();
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleAssignRole = () => {
    assignRole(selectedUser, selectedRole);
    setSelectedUser('');
    setSelectedRole('');
  };

  const handleCreateDepartment = () => {
    const deptName = prompt('Enter new department name:');
    if (deptName) {
      createDepartment(deptName);
    }
  };

  return (
    <Container>
      <h2>Manage Roles and Departments</h2>
      <div>
        <FormControl fullWidth margin="normal">
          <InputLabel id="select-user-label">Select User</InputLabel>
          <Select
            labelId="select-user-label"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="select-role-label">Select Role</InputLabel>
          <Select
            labelId="select-role-label"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <MenuItem value="manager">Manager</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAssignRole}
          disabled={!selectedUser || !selectedRole}
        >
          Assign Role
        </Button>
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={handleCreateDepartment}>
          Create Department
        </Button>
      </div>
      <List>
        {departments.map((dept, index) => (
          <ListItem key={index}>
            <ListItemText primary={dept.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => removeEmployee(dept.employees[0])}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ManageRoles;
