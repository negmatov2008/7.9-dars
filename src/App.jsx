import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Categrie from "./pages/Categrie";
import Game from "./pages/Game";
import { ThemeProvider, styled } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Categorie",
    element: <Categrie />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
]);
// BU global temani taminlab beradi
const theme = {
  DarkNavy: "#261676",
  blue: "#2463FF",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
