import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  Account,
  Calendar,
  Home,
  Tasks
} from './pages';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App;