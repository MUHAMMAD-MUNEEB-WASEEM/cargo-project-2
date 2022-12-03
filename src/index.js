import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginScreen from './authScreens/loginScreen/LoginScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter
} from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import SignupScreen from './authScreens/signupScreen/SignupScreen';
import SignupChoice from './authScreens/signupChoice/SignupChoice';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/signup",
    element: <SignupScreen />,
  },
  {
    path: "/choice",
    element: <SignupChoice />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
