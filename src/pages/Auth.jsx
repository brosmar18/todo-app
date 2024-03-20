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
  const { login, register, error, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      role,
      email,
      password,
    };
    register(userData);
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
                label="Email"
                id="email"
                placeholder="Your email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              <PasswordInput
                label="Password"
                id="password"
                placeholder="Your password"
                required
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
            <form onSubmit={handleRegisterSubmit}>
              <TextInput
                label="First Name"
                id="firstName"
                placeholder="First name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mb-4"
              />
              <TextInput
                label="Last Name"
                id="lastName"
                placeholder="Last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mb-4"
              />
              <NativeSelect
                label="Role"
                id="role"
                placeholder="Choose a role" 
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                data={[
                  {
                    value: "",
                    label: "Choose a role",
                    disabled: true,
                    hidden: true,
                  }, 
                  "Software Developer",
                  "Graphic Designer",
                  "Team Lead",
                  "Administrator",
                ]}
                className="mb-4"
              />

              <TextInput
                label="Email"
                id="email"
                placeholder="Your email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              <PasswordInput
                label="Password"
                id="password"
                placeholder="Your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </section>
  );
};

export default Auth;
