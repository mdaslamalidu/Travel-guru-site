import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import BookingPage from './components/BookingPage/BookingPage';
import BoodDetails from './components/BoodDetails/BoodDetails';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/booking",
    element: <BookingPage></BookingPage>
  },
  {
    path: "/yourPlace",
    element: <BoodDetails></BoodDetails>,
    loader: () => {
      return fetch("http://localhost:5000/booked")
    }
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Registration></Registration>
  }

])

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
