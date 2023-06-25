import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import Welcome from "./welcome";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <Welcome />
  </StrictMode>
);
