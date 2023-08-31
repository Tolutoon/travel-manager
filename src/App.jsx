import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  )
}

export default App;
