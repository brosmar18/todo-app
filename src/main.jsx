import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { SettingsProvider } from './context/Settings';
import { TasksProvider } from './context/TaskContext'
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <TasksProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </TasksProvider>
    </MantineProvider>
  </React.StrictMode>,
)
