import React from "react";
import { RouterProvider, ScrollRestoration } from "react-router";
import router from "./router";

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollRestoration />
    </RouterProvider>
  );
}

export default App;
