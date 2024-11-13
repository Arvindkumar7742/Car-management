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
import { PrivateRoute } from "./pages/PrivateRoute"
import { Dashboard } from './pages/Dashboard';
import MyProfile from './dashboard/MyProfile';
import { YourCars } from './dashboard/YourCars';
import { AddCar } from './dashboard/AddCar';

function App() {

  const { user } = useContext(UserContext);

  return (
    <div className="text-center">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard/my-profile" element={<MyProfile />}></Route>
            <Route path="/dashboard/add-car" element={<AddCar />}></Route>
            <Route path="/dashboard/your-cars" element={<YourCars />}></Route>
          </Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
