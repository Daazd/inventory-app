import React from 'react';
import { AddItemForm } from './AddItemForm';
import DeleteItemForm from './DeleteItemForm';
import { UpdatedItemForm } from './UpdateItemForm';
import TextField from '@mui/material/TextField';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
    <Routes>
        <Route path="add" element={<AddItemForm />} />
        <Route path="delete" element={<DeleteItemForm />} />
        <Route path="update" element={<UpdatedItemForm />} />
    </Routes>
    );
};

export { Admin };