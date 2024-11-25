import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, Routes } from "react-router-dom";
import { CoffeeContexProvider } from "./Context/CoffeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CoffeeContexProvider>
      <RouterProvider router={Routes} />
    </CoffeeContexProvider>
  </StrictMode>
);
