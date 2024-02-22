import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Todo from './Components/Todo';

const App = () => {
  return (
    <MantineProvider>
      <Todo />
    </MantineProvider>

  )
}

export default App;