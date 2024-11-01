import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/states/api.js";
// import { AuthContextProvider } from "./context/useAuthcontext.jsx";
import { AuthProvider } from "./components/login/authcontextprovider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </AuthProvider>
  </Provider>
);
