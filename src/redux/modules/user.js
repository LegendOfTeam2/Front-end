// Redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Utils
import {
  emailDupCheckApi,
  signUpUserApi,
  signInUserApi,
  kakaoAuthApi,
} from '../../utils/apis/user';
import createToken from '../../utils/token';

export const emailDupCheckThunk = createAsyncThunk(
  'user/emailDupCheck',
  async (payload, thunkAPI) => {
    const resData = await emailDupCheckApi(payload)
      .then((res) => res.data.success)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signUpUserThunk = createAsyncThunk(
  'use/signUpUser',
  async (payload, thunkAPI) => {
    const resData = await signUpUserApi(payload).then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signInUserThunk = createAsyncThunk(
  'user/signInUser',
  async (payload, thunkAPI) => {
    const resData = await signInUserApi(payload)
      .then((res) => res)
      .catch((err) => console.err(err));

    createToken(
      resData.headers['authorization'].split(' ')[1],
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

export const kakaoAuthThunk = createAsyncThunk(
  'user/kakaoAuth',
  async (payload, thunkAPI) => {
    const resData = await kakaoAuthApi(payload.code)
      .then((res) => res)
      .catch((err) => console.err(err));

    createToken(
      resData.headers['authorization'].split(' ')[1],
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
    builder.addCase(signInUserThunk.fulfilled, (state, action) => {
      state.is_login = action.payload;
    });
  },
});

export const { headerAction } = userSlice.actions;
export default userSlice.reducer;
