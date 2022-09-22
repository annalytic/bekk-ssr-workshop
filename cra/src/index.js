import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SporProvider, Language } from "@vygruppen/spor-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SporProvider language={Language.English}>
      <App />
    </SporProvider>
  </React.StrictMode>
);
