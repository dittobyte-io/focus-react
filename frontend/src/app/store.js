import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "app/api/apiSlice";
import drawerReducer from "features/ui/side-nav/drawerSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		drawer: drawerReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});
