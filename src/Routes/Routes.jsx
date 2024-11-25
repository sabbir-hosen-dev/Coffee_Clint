const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home");
const { default: AddCoffe } = require("../Pages/AddCoffe");
const { default: UpgradeCoffee } = require("../Pages/UpgradeCoffee");
const { default: MainElement } = require("../Components/MainElement");

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainElement />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffe />,
      },
      {
        path: "/update-coffee",
        element: <UpgradeCoffee />,
      },
      {
        path: "/coffee",
      },
    ],
  },
]);

// export default
