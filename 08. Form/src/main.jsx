import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import Form from "./components/Form.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Form />
  </>
);
