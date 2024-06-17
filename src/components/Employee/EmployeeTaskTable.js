// ..\src\components\Employee\EmployeeTasksTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const EmployeeTasksTable = ({ user, tasks, onTaskToggle }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Task</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={task.completed}
                  onClick={() => onTaskToggle(task.id)}
                  icon={<RadioButtonUnchecked />}
                  checkedIcon={<CheckCircle />}
                />
                {task.completed ? 'Completed' : 'In Progress'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTasksTable;
