import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "features/ui/side-nav/drawerSlice";

export const store = configureStore({
	reducer: {
		drawer: drawerReducer,
	},
});
