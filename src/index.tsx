import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { AxiosRequestConfig } from "axios";
import axios from "./http-handler/axios-config";

axios.interceptors.request.use((request: AxiosRequestConfig) => {
  if (request.headers) {
    request.headers.demoToken1 = "111";
  }
  console.log(request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
