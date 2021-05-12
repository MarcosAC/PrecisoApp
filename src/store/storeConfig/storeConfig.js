import { createStore, combineReducers } from "redux";
import profissionalReducer from "../reducers/profissionalReducer";

const reducers = combineReducers({
    profissionalReducer: profissionalReducer,
});

const StoreConfig = () => {
    return createStore(reducers);
};

export default StoreConfig;