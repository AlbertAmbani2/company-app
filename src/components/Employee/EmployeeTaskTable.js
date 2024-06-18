// ..\src\components\Employee\EmployeeTasksTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@mui/material';

const EmployeeTasksTable = ({ tasks, onTaskToggle }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Task ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Completed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.id}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>
              <Checkbox
                checked={task.completed}
                onChange={() => onTaskToggle(task.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeTasksTable;
