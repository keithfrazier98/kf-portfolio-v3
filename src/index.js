import React from "react";
import ReactDOMClient from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>
);
