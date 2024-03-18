import { useContext, useState } from "react";
import {
  TextInput,
  Button,
  Checkbox,
  Anchor,
  PasswordInput,
  NativeSelect,
} from "@mantine/core";
import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {!showRegisterForm ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Welcome back!
            </h2>
            <div className="text-center mb-6">
              <p>Don't have an account yet?</p>
              <Anchor
                onClick={toggleForm}
                className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
              >
                Create an account
              </Anchor>
            </div>
            <form onSubmit={handleLoginSubmit}>
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
                  onChange={(event) =>
                    setRememberMe(event.currentTarget.checked)
                  }
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
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Register!</h2>
            <div className="text-center mb-6">
              <p>Already have an account?</p>
              <Anchor
                onClick={toggleForm}
                className="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
              >
                Login
              </Anchor>
            </div>
            <form>
              <TextInput
                label="First Name"
                id="firstName"
                placeholder="first name"
                required
                className="mb-4"
              />
              <TextInput
                label="Last Name"
                id="lastName"
                placeholder="last name"
                required
                className="mb-4"
              />
              <NativeSelect
                label="Role"
                id="role"
                required
                data={[
                  "Software Developer",
                  "Graphic Designer",
                  "Team Lead",
                  "Administrator",
                ]}
                className="mb-4"
              />
              <TextInput
                label="Username"
                id="username"
                placeholder="username"
                required
                className="mb-4"
              />
              <PasswordInput
                label="Password"
                id="password"
                placeholder="Your password"
                required
                type="password"
                className="mb-4"
              />
              <Button
                type="submit"
                fullWidth
                className="bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Register
              </Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Auth;
