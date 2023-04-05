import { configureStore } from "@reduxjs/toolkit";
import usersSlices from "./slices/usersSlices";

const store = configureStore({
  reducer: { users: usersSlices},
});

export default store;


