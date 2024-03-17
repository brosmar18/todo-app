import { useContext, useState } from "react";
import {
  TextInput,
  Button,
  Checkbox,
  Anchor,
  PasswordInput,
} from "@mantine/core";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome back!</h2>
        <div className="text-center mb-6">
          <p>Don't have an account yet?</p>
          <Anchor
            href="#"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Create an account
          </Anchor>
        </div>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            id="username"
            placeholder="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4"
          />
          <PasswordInput
            label="Password"
            id="password"
            placeholder="Your password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <div className="flex items-center justify-between mb-6">
            <Checkbox
              id="remember_me"
              label="Remember me"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.currentTarget.checked)}
            />
            <Anchor
              href="#"
              className="text-sm text-blue-500 hover:text-blue-600"
            >
              Forgot password?
            </Anchor>
          </div>
          <Button
            type="submit"
            fullWidth
            className="bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign in
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
