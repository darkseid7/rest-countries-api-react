import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import CountryDetail from "./components/CountryDetail/CountryDetail";

import "./App.css";

const GlobalStyles = createGlobalStyle`  
  body {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/:country",
    element: <CountryDetail />,
  },
]);

function App() {
  return (
    <>
      <ThemeProviderWrapper>
        <GlobalStyles />
        <Header />
        <RouterProvider router={router} />
      </ThemeProviderWrapper>
    </>
  );
}

export default App;
