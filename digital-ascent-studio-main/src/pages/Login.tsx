import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  `${API}/auth/login`,
  { email, password },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

      localStorage.setItem("token", res.data.token);

      // redirect dashboard
      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="p-8 shadow-lg rounded-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-white text-black w-full p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;