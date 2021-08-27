import { createStore, combineReducers } from "redux";
import shoesShopReducer from "./reducers/ShoesShopReducer";

//khỏi tạo rootReducer(quản lý các root reducer)

const rootReducer = combineReducers({
  //những reducer con được truyền vô đây
  shoesShopReducer,
  // shoesShopReducer=shoesShopReducer
});

//khỏi tạo redux store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
