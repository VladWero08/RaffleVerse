import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function PrivateComponent() {
    // Pentru a naviga catre anumite pagini doar daca user-ul este autentificat
    const{ currentUser } = useAuth()
    return currentUser ? <Outlet/> : <Navigate to="/"/> 
}
