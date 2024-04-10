import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SingleItemPage, HomePage, InventoryPage, CartPage } from "../pages";
import { Button, Stack } from "@mui/material";
import { Header } from "./Header";
import { Item } from "./Item";
import { Admin } from "./Admin";
import { PrivateRouteWrapper } from "./PrivateRoute";
import AdminPanelForm from "./AdminPanelForm";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import CreateUser from "./LoginUserForm";

export const App = () => {
  const [user, setUser] = useState(null);
  const [openAddItem, setOpenAddItem] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [items, setItems] = useState([]);
  //const history = useHistory();
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleDelete = async () => {
    try {
      const response = await fetch(`${apiURL}/items/${item.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Item deleted");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (item) => {
    try {
      const response = await fetch(`${apiURL}/items/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        alert("Item updated");
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function handleItemClick(id) {
    //make it work
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const data = await response.json();
      setCurrentItem(data);
      setItems([]);
    } catch (err) {
      console.log("Error getting the item", err);
    }
  }

  async function handleAddItemClick() {
    setItems([]);
    setCurrentItem({});
    //create form to add Item.
  }

  // create router and routes: /, /items, /items/:id, /cart
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<InventoryPage user={user} />} />
      <Route path="/items/:id" element={<SingleItemPage user={user} />} />
      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/admin"
        element={
          <PrivateRouteWrapper roles={["admin"]}>
            <AdminPanelForm />
          </PrivateRouteWrapper>
        }
      />
      <Route
        path="/admin/*"
        element={
          <PrivateRouteWrapper roles={["admin"]}>
            <Admin />
          </PrivateRouteWrapper>
        }
      />
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
