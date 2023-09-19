import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import Pagination from "./Hooks/PaginationNumber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Pagination>
      {" "}
      <App />
    </Pagination>
  </React.StrictMode>
);
