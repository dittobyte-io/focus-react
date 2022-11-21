import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// initialState: { user: null, token: null },
// }

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, message: null },
  reducers: {
    
    setCredentials: (state, {payload:{message,token,data}}) => {
	
	// if(message){
	// 	console.log(message,"ye msg hai");
	// 	state.error=message;
	// }
	            state.user=data;
				state.token=token;
				console.log(state.user,"hobe1");
				state.message=message;
				state.success=true;

				localStorage.setItem('token',token);
	},
	logOut: (state, action) => {
		state.user = null;
		state.token = null;
	},


  },
})

// Action creators are generated for each case reducer function
export const { setCredentials, logOut } = AuthSlice.actions

export default AuthSlice.reducer