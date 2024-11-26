import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainElement from "./../Components/MainElement";
import AddCoffe from "./../Pages/AddCoffe";
import UpgradeCoffee from "./../Pages/UpgradeCoffee";
import NotFound from "../Pages/NotFount";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainElement />}>
          <Route path="/add-coffee" element={<AddCoffe />} />
          <Route path="/edit-coffee" element={<UpgradeCoffee />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
