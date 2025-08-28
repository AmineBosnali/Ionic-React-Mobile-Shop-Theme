import React from 'react';
import { IonButton } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../../services/authApi';
import { clearCredentials } from '../../../store/authSlice';
import { AppDispatch } from '../../../store/store';

const Logout: React.FC = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await logout().unwrap();
    dispatch(clearCredentials());
  };

  return <div className='logoutButton' onClick={handleLogout}>Logout</div>;
};

export default Logout;
