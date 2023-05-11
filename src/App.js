import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  RootLayouts,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route path="" element={<Homepage />} />
      <Route path="exchanges" element={<Exchanges />} />
      <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="crypto/:coinId" element={<CryptoDetails />} />
      <Route path="news" element={<News />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
