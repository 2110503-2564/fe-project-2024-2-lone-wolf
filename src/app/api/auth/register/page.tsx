// components/Register.tsx or pages/register.tsx in Next.js
import { User } from "../../../../../interface";
import userRegister from "@/libs/userRegister";
import { useState } from "react";

export default async function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user: User = {
        name,
        email,
        password,
        tel
    }
    
    userRegister(user)
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telephone</label>
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

