import React, { useState } from "react";
import apiURL from "../api";

export const CreateUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch(`${apiURL}/users`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (response.ok) {
            alert("User created");
        } else {
            alert("Error creating user");
        }
        } catch (error) {
        alert(error);
        console.error(error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            />
        </label>
        <label>
            Email:
            <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            />
        </label>
        <label>
            Password:
            <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            />
        </label>
        <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;