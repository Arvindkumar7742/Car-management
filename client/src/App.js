import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from './pages/HomePage';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import { useContext } from 'react';
import { UserContext } from './ContextAPI/UserContext';

function App() {

  const { user } = useContext(UserContext);

  return (
    <div className="text-center">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
