import React, { useState } from "react";
import apiURL from "../api";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Stack,
  Divider,
  Typography,
  LinearProgress,
  ButtonGroup,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import AdminPanelForm from "./AdminPanelForm";


  const [formType, setFormType] = useState("guest");
  const [isForLogin, setIsForLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  if (formType === 'admin') {
    return <AdminPanelForm />;
  };

  const createUser = async (data) => {
    try {
      const response = await fetch(`${apiURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setOpen(false);
        setUser(response.data);
      } else {
        console.log({ response });
        setError("root.submission", "Error Creating User");
      }
    } catch (error) {
      setError("root.submission", error.message);
      console.error(error);
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await fetch(`${apiURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setOpen(false);
        setUser(response.data);
      } else {
        console.log({ response });
        setError("root.submission", {
          message: response.status + ": " + response.statusText,
        });
      }
    } catch (error) {
      setError("root.submission", error);
      console.error({ error });
    }
  };

  const onSubmit = async (data) => {
    console.log({ data });
    setIsSubmitting(true);
    if (isForLogin) {
      loginUser(data);
    } else {
      createUser(data);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setIsForLogin(true);
    setIsSubmitting(false);
    reset();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle textAlign="center">
        {isForLogin ? "Login" : "Register"}
      </DialogTitle>
      <DialogContent>
        <form>
          <Stack direction="column" spacing={2} margin={2}>
            {isSubmitting && <LinearProgress />}
            {errors.root?.submission && (
              <Typography color="error">
                {errors.root.submission.message}
              </Typography>
            )}
            {isForLogin ? (
              <>
                <TextField
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
                  label="Email"
                  {...register("email", { required: "Email is required" })}
                />
                <TextField
                  error={errors.password}
                  helperText={errors.password && errors.password.message}
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </>
            ) : (
              <>
                <TextField
                  error={errors.name}
                  helperText={errors.name && errors.name.message}
                  label="Name"
                  {...register("name", { required: "Name is required" })}
                />
                <TextField
                  error={errors.email}
                  helperText={errors.email && errors.email.message}
                  label="Email"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => {
                      // make sure the email is valid
                      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
                      return emailRegex.test(value) || "Email is not valid";
                    },
                  })}
                />
                <TextField
                  error={errors.password}
                  helperText={errors.password && errors.password.message}
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    validate: (value) => {
                      // make sure the password is at least 8 characters long
                      if (value.length < 8) {
                        return "Password must be at least 8 characters long";
                      }
                      // make sure the password contains at least one uppercase letter
                      if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                      }
                      // make sure the password contains at least one number
                      if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                      }
                      // make sure the password contains at least one special character
                      if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) {
                        return "Password must contain at least one special character";
                      }
                      return true;
                    },
                  })}
                />
                <TextField
                  error={errors.confirmPassword}
                  helperText={
                    errors.confirmPassword && errors.confirmPassword.message
                  }
                  label="Confirm Password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      return (
                        value === watch("password") || "Passwords do not match"
                      );
                    },
                  })}
                />
              </>
            )}
            <Button
              disabled={isSubmitting}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              {isForLogin ? "Login" : "Register"}
            </Button>
            <Divider />
            <Typography variant="body2" textAlign="center">
              {isForLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </Typography>
            <Button onClick={() => setIsForLogin(!isForLogin)}>
              {isForLogin ? "Register" : "Login"} 
            </Button>
            <Divider />
            <Typography variant="body2" textAlign="center">
              Or login as 
            </Typography>
            <Box display="flex" justifyContent="center">
              <ButtonGroup color="primary">
                <Button onClick={() => setFormType('guest')}>Guest</Button>
                <Button onClick={() => setFormType('admin')}>Admin</Button>
              </ButtonGroup>
            </Box>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { LoginUserForm };
