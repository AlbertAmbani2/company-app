import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import EmployeeTasksTable from './EmployeeTaskTable'; // Ensure the path is correct

const UserTasks = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user.id]);

  const handleTaskToggle = async (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Mock update to JSONPlaceholder (in real scenario, make a PUT/PATCH request)
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
        completed: !updatedTasks.find((task) => task.id === taskId).completed,
      });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return <EmployeeTasksTable user={user} tasks={tasks} onTaskToggle={handleTaskToggle} />;
};

export default UserTasks;
