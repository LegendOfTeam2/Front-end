// Redux
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Utils
import {
  emailDupCheckApi,
  signUpUserApi,
  signInUserApi,
  kakaoAuthApi,
  googleAuthApi,
} from '../../utils/apis/member';
import createToken from '../../utils/token';

export const emailDupCheckThunk = createAsyncThunk(
  'member/emailDupCheck',
  async (payload, thunkAPI) => {
    const resData = await emailDupCheckApi(payload)
      .then((res) => res.data.success)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signUpUserThunk = createAsyncThunk(
  'member/signUpUser',
  async (payload, thunkAPI) => {
    const resData = await signUpUserApi(payload).then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signInUserThunk = createAsyncThunk(
  'member/signInUser',
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
  'member/kakaoAuth',
  async (payload, thunkAPI) => {
    const resData = await kakaoAuthApi(payload.code)
      .then((res) => res)
      .catch((err) => console.err(err));
    console.log(resData);
    createToken(
      resData.headers['authorization'].split(' ')[1],
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

export const googleAuthThunk = createAsyncThunk(
  'member/googleAuth',
  async (payload, thunkAPI) => {
    const resData = await googleAuthApi(payload.code)
      .then((res) => res)
      .catch((err) => console.err(err));
    console.log(resData);
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

export const memberSlice = createSlice({
  name: 'member',
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

export const { headerAction } = memberSlice.actions;
export default memberSlice.reducer;
