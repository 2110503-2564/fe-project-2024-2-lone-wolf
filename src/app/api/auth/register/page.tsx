// components/Register.tsx or pages/register.tsx in Next.js
/*'use client'
import { User } from "../../../../../interface";
import userRegister from "@/libs/userRegister";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const makeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const user: User = {
        name,
        email,
        password,
        tel
    }
    
    const response = await userRegister(user)

    if(response.ok)
      console.log('user created')
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
    
                <div className="w-fit space-y-2">
     
                    <div className="text-md text-left">Name</div>
                    <TextField
                        className="rounded-lg bg-white"
                        variant="standard"
                        fullWidth
                        name="Name-Lastname"
                        onChange={e => setName(e.target.value)}  
                    />
    
                    <div className="text-md text-left">Email</div>
                    <TextField
                        className="rounded-lg bg-white"
                        variant="standard"
                        fullWidth
                        name="Email"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <div className="text-md text-left">Contact Number</div>
                    <TextField
                        className="rounded-lg bg-white"
                        variant="standard"
                        fullWidth
                        name="Contact-Number"
                        onChange={e => setTel(e.target.value)}
                    />

                    <div className="text-md text-left">Password</div>
                    <TextField
                        className="rounded-lg bg-white"
                        variant="standard"
                        fullWidth
                        name="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                shadow-sm text-white" name="Sign Up" onClick={makeUser}>Sign Up</button>
            </main>
  );
};*/

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

  const makeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const user: User = {
        name,
        email,
        password,
        tel
    }
    
    const response = await userRegister(user)

    if(response.ok)
      console.log('user created')
  };

  return (
    <main className="w-full max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
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


