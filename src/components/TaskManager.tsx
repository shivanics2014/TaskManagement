import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addTask, toggleTask, deleteTask } from '../redux/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import LogoutButton from './LogoutButton';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const TaskManager: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask({ id: uuidv4(), title: newTask, completed: false }));
      setNewTask('');
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Task Manager
        </Typography>
        <LogoutButton />
        <Box display="flex" gap={2} marginY={2}>
          <TextField
            fullWidth
            label="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTask}>
            Add Task
          </Button>
        </Box>
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id} secondaryAction={
              <IconButton edge="end" onClick={() => dispatch(deleteTask(task.id))}>
                <DeleteIcon />
              </IconButton>
            }>
              <Checkbox
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <ListItemText
                primary={task.title}
                sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TaskManager;
