import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CoffeeContexProvider } from "./Context/CoffeContext";
import RoutesApp from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CoffeeContexProvider>
    <RoutesApp />
    </CoffeeContexProvider>
  </StrictMode>
);
