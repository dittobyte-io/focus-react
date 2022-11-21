import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "app/api/authApi";
import drawerReducer from "features/ui/side-nav/drawerSlice";
import  authReducer from "features/auth/authSlice";


export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		drawer: drawerReducer,
		auth: authReducer

	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
	devTools: true,
});
