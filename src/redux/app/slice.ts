import { ICommentResponse, IPostResponse, IUserResponse } from '@/dto/response';
import { createSlice } from '@reduxjs/toolkit';
import { getCommentsList, getPost, getPostList, getUserList } from './thunks';

interface IAppStore {
  userList: IUserResponse[];
  postList: IPostResponse[];
  post: IPostResponse | null;
  commentsList: ICommentResponse[];
}
const initialState: IAppStore = {
  userList: [],
  postList: [],
  post: null,
  commentsList: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.fulfilled, (state, { payload }) => {
      state.userList = payload;
    });

    builder.addCase(getPostList.fulfilled, (state, { payload }) => {
      state.postList = payload;
    });

    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      state.post = payload;
    });

    builder.addCase(getCommentsList.fulfilled, (state, { payload }) => {
      state.commentsList = payload;
    });
  },

});

export default appSlice.reducer;
