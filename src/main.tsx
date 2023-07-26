import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store"; 
import './index.css';
import ErrorPage from "./error-page";
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
import Pessoa from './routes/pessoa';
import RegistrarPessoa from './pages/pessoas/PessoaRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <SigninPage />,
      },
      {
        path: "register-pessoa",
        element: <RegistrarPessoa />,
      },
      {
        path: "usuarios/:userId",
        element: <Pessoa />,
      },
    ],    
  },
]);

const rootElement = document.getElementById('root') as Element;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
