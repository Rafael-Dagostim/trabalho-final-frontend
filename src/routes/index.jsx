import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route
} from "react-router-dom";

import Products from "../pages/products";

export function RouterIndex() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/products" element={<Products />} />

      </RouterRoutes>
    </BrowserRouter>
  )
}