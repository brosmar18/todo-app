import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import {
  Account,
  Calendar,
  Home,
  Tasks
} from './pages';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <MantineProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/tasks' element={ <Tasks /> } />
            <Route path='/calendar' element={ <Calendar /> } />
            <Route path='/account' element={ <Account /> } />
          </Routes>
        </Router>
      </div>
    </MantineProvider>

  )
}

export default App;