import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainElement from "./../Components/MainElement";
import AddCoffe from "./../Pages/AddCoffe";
import NotFound from "../Pages/NotFount";
import Home from "../Pages/Home";
import UpdateCoffee from "../Pages/UpdateCoffee";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainElement />}>
          <Route path="" element={<Home />} />
          <Route path="/add-coffee" element={<AddCoffe />} />
          <Route path="/update-coffee" element={<UpdateCoffee />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
