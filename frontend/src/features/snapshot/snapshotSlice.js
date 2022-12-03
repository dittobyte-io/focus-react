import { createSlice } from "@reduxjs/toolkit";

export const SnapshotSlice = createSlice({
	name: "overallState",
	initialState: { goals: [], impacts: [], intiatives: [] },
	reducers: {},
});

export default SnapshotSlice.reducer;
