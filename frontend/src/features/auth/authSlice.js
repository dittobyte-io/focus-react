import { createSlice } from '@reduxjs/toolkit'



export const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, message: null },
  reducers: {
    
    setCredentials: (state, {payload:{message,token,data}}) => {
	            state.user=data;
				state.token=token;
				console.log(state.user,"hobe1");
				state.message=message;
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