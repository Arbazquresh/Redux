import {
    createStore,
    combineReducers
} from "redux";
import { productReducer } from "./reducer/productReducer";
import { pdetailsreducer } from "./reducer/pdetailreducer";
import { pcartreducer } from "./reducer/pcartreducer";

export const configStore = () => {
    const store = createStore(
        combineReducers({
          productReducer,
          pdetailsreducer,
          pcartreducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}