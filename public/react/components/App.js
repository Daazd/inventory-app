import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SingleItemPage, HomePage, InventoryPage, CartPage } from "../pages";
import { Button, Stack } from "@mui/material";
import { Header } from "./Header";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);

  // create router and routes: /, /items, /items/:id, /cart
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<InventoryPage user={user} />} />
      <Route path="/items/:id" element={<SingleItemPage user={user} />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<div>Page Not Found 404</div>} />
    </Routes>
  );

  return (
    <Router>
      <Stack direction="column" style={{ width: "80%", margin: "0 auto" }}>
        <Header user={user} setUser={setUser} />
        {routes}
        <Stack direction="row" justifyContent="flex-end">
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
          <Link to="/items">
            <Button variant="contained">Back to Shopping</Button>
          </Link>
          <Link to="/cart">
            <Button variant="contained">Your Cart</Button>
          </Link>
        </Stack>
      </Stack>
    </Router>
  );
};
