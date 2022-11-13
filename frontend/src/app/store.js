import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import drawerReducer from "features/ui/side-nav/drawerSlice";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

