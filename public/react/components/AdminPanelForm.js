import React from "react";
import { TextField, Button, Box } from "@mui/material";

const AdminPanelForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted");
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" type="password" variant="outlined" />
            <Button variant="contained" type="submit">Login</Button>
        </Box>
    );
};

export default AdminPanelForm;
    