import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { UserContextProvider } from "./providers/userProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
