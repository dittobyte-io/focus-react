import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "app/api/apiSlice";
import drawerReducer from "features/ui/side-nav/drawerSlice";
import  authReducer from "features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		drawer: drawerReducer,
		auth: authReducer

	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

