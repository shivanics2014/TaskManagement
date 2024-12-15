import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import LoginForm from './components/LoginForm';
import TaskManager from './components/TaskManager';
import { CssBaseline, Box } from '@mui/material';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Router>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: 4 }}>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/tasks" /> : <LoginForm />} />
          <Route path="/tasks" element={user ? <TaskManager /> : <Navigate to="/" />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
