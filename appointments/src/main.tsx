import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./main.css";

const rootElement = document.querySelector("#root") as HTMLDivElement;

const Root = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(rootElement).render(<Root />);
