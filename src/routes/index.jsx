import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import Products from "../pages/products";
import NavBar from "../components/NavBar";

import { routes } from "./routes";

export function RouterIndex() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<NavBar routes={routes} />}>
          <Route path="/products" element={<Products />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}
