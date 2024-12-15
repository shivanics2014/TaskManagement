import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from '../types';

const loadTasks = (username: string | null): Task[] => {
  if (!username) return [];
  return JSON.parse(localStorage.getItem(`tasks_${username}`) || '[]');
};

const saveTasks = (username: string | null, tasks: Task[]) => {
  if (username) {
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  }
};

const initialState: TaskState = {
  tasks: loadTasks(localStorage.getItem('user')),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      saveTasks(localStorage.getItem('user'), state.tasks);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasks(localStorage.getItem('user'), state.tasks);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      saveTasks(localStorage.getItem('user'), state.tasks);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
