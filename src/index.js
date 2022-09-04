import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallaryState";

const store = configureStore({
  reducer: {
    gallery: galleryReducer
  }
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
