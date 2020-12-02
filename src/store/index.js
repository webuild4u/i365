import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../store/reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

// configuration object for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
//create a store
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { store, persistor };
