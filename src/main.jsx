import React from "react";
import ReactDOM from "react-dom/client";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancer = composeAlt(applyMiddleware(logger, thunk));
/* const store = createStore(rootReducer, composeEnhancer); si tenemos reducer combinados */
const store = createStore(pokemonsReducer, composeEnhancer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
