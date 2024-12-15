import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleLogout} sx={{ marginBottom: 2 }}>
      Logout
    </Button>
  );
};

export default LogoutButton;
