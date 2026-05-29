import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  user: { username: string } | null
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: AuthState = {
  token: null,
  user: null,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer
