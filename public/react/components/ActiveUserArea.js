import React from "react";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { LoginUserForm } from "./LoginUserForm";

const ActiveUserArea = ({ user, setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLoginForm = () => {
    setShowForm(true);
    handleClose();
  };

  return (
    <>
      {user ? (
        <IconButton onClick={handleClick}>
          <Avatar sx={{ bgcolor: "#fff" }}>
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        </IconButton>
      ) : (
        <IconButton onClick={handleClick}>
          <Avatar />
        </IconButton>
      )}
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {user ? (
          <>
            <MenuItem onClick={handleClose}>
              <Typography variant="subtitle2">{user.name}</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </>
        ) : (
          <MenuItem onClick={handleOpenLoginForm}>Login</MenuItem>
        )}
      </Menu>
      <LoginUserForm open={showForm} setOpen={setShowForm} setUser={setUser} />
    </>
  );
};

export { ActiveUserArea };
