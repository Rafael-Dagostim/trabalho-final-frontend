import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

import Products from "../pages/products";
import NavBar from "../components/NavBar";

import { routes } from "./routes";
import Services from "../pages/services";
import Users from "../pages/users";
import Login from "../pages/login";

export function RouterIndex() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<NavBar routes={routes} />}>
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
