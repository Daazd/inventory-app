import { InventoryPage } from "./InventoryPage";
import { CartPage } from "./CartPage";
import { HomePage } from "./HomePage";
import { SingleItemPage } from "./SingleItemPage";
import React from "react";
import ReactDom from "react-dom";
import { App } from "../components/App";
import { AuthProvider } from "../components/AuthContext";

/*ReactDom.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);*/

export { InventoryPage, CartPage, HomePage, SingleItemPage };
