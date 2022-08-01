import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	position: true,
};

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		toggle: (state) => {
			state.position = !state.position;
		},
	},
});

export const { toggle } = drawerSlice.actions;
export default drawerSlice.reducer;
