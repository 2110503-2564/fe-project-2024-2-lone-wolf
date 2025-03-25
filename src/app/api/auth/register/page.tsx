'use client'
import { User } from "../../../../../interface";
import userRegister from "@/libs/userRegister";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState(""); // To store error messages

  const validateInputs = () => {
    // Check if name is provided
    if (!name.trim()) {
      setError("Name is required");
      return false;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please add a valid email address");
      return false;
    }

    // Check if phone number is valid (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(tel)) {
      setError("Please add a valid 10-digit phone number");
      return false;
    }

    // Check if password is long enough
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    // If everything is valid, clear any error message
    setError("");
    return true;
  };

  const makeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs before proceeding
    if (!validateInputs()) {
      return; // Don't proceed if validation fails
    }

    const user: User = {
        name,
        email,
        password,
        tel
    };

    // Call the user register function
    const response = await userRegister(user);

    if (response.success) {
      console.log('User created');
    } else {
      setError("There was an error creating the user. Please try again.");
    }
  };

  return (
    <main className="w-full max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>

      {error && <div className="text-red-500 text-center">{error}</div>} {/* Show error message */}

      <form className="space-y-4" onSubmit={makeUser}>
        <div className="space-y-1">
          <label className="text-md font-medium text-gray-700">Name</label>
          <TextField
            className="w-full"
            variant="outlined"
            fullWidth
            name="Name-Lastname"
            onChange={e => setName(e.target.value)}  
          />
        </div>

        <div className="space-y-1">
          <label className="text-md font-medium text-gray-700">Email</label>
          <TextField
            className="w-full"
            variant="outlined"
            fullWidth
            name="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-md font-medium text-gray-700">Contact Number</label>
          <TextField
            className="w-full"
            variant="outlined"
            fullWidth
            name="Contact-Number"
            onChange={e => setTel(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-md font-medium text-gray-700">Password</label>
          <TextField
            className="w-full"
            variant="outlined"
            fullWidth
            name="Password"
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-sky-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
};
