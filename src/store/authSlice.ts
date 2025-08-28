import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  uid: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ email: string; uid: string; idToken: string }>) => {
      const { email, uid, idToken } = action.payload;
      state.user = { email, uid };
      state.token = idToken;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
