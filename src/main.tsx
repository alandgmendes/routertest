import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
} from "./routes/contact";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './routes';
import SigninPage from './pages/SigninPage';
import SignUpPage from './pages/SignUpPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <SigninPage />,
      },
    ],    
  },
]);

const rootElement = document.getElementById('root') as Element;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
