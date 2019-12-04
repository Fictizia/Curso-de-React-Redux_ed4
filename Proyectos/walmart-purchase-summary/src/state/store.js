import { createStore } from "redux";
import reducers from "./state";

const store = createStore(reducers, {});

export default store;
