import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store"; 
import './index.css';
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SigninPage from './pages/auth/SigninPage';
import SignUpPage from './pages/auth/SignUpPage';
import App from './App';
import PessoaHome from './pages/pessoas/PessoaHome';
import MeusProjetos from './pages/projetos/MeusProjetos';
import PessoaRegister from './pages/pessoas/PessoaRegister';
import ProjetoCriar  from './pages/projetos/ProjetoCriar';
import Projeto from './pages/projetos/Projeto';

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
        element: <PessoaRegister />,
      },
      {
        path: "usuarios/:userId",
        element: <PessoaHome />,
      },

      {
        path: "usuarios/:userId/projetos",
        element: <MeusProjetos />,
      },
      {
        path: "usuarios/:userId/projetos/novo",
        element: <ProjetoCriar />,
      },
      {
        path: "usuarios/:userId/projetos/novo/:projetoId",
        element: <ProjetoCriar />,
      },
      {
        path: "usuarios/:userId/projetos/:projetoId",
        element: <Projeto />,
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
