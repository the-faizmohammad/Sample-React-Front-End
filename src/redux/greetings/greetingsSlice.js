import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greetings/random_greeting',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/v1/random_greeting');
      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: undefined,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload.greeting;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export default greetingsSlice.reducer;
