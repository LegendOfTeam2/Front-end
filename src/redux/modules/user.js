// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { setCookie } from '../../utils/cookie';

export const emailDupCheckThunk = createAsyncThunk(
  'user/emailDupCheck',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`/api/emailcheck`, payload)
      .then((res) => res.data.success)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const addUserThunk = createAsyncThunk(
  'use/addUser',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`/api/signup`, payload)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signUserThunk = createAsyncThunk(
  'user/signUser',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`/api/login`, payload)
      .then((res) => res)
      .catch((err) => console.err(err));
    setCookie('authorization', resData.headers['authorization'].split(' ')[1]);
    window.sessionStorage.setItem(
      'refresh-token',
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

export const kakaoAuthThunk = createAsyncThunk(
  'user/kakaoLogin',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/api/kakao/callback?code=${payload.code}`)
      .then((res) => res);
    setCookie('authorization', resData.headers['authorization'].split(' ')[1]);
    window.sessionStorage.setItem(
      'refresh-token',
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

const initialState = {
  is_login: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    headerAction: (state, action) => {
      state.is_login = action.payload.is_login;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(kakaoAuthThunk.fulfilled, (state, action) => {
      state.is_login = action.payload;
    });
    builder.addCase(signUserThunk.fulfilled, (state, action) => {
      state.is_login = action.payload;
    });
  },
});

export const { headerAction } = userSlice.actions;
export default userSlice.reducer;
