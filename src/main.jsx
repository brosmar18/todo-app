import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { SettingsProvider } from "./context/Settings";
import { TaskProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <AuthProvider>
        <TaskProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </TaskProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
