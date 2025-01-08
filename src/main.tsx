import { createRoot } from "react-dom/client";
import App from "./app";
import "@shared/styles/globals.scss";

createRoot(document.getElementById("root")!).render(<App />);
