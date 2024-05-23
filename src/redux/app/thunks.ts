import { commentsService, postService, userService } from "@/services";
import { handleThunkApiError } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserList = createAsyncThunk(
  '/users/get-data',
  handleThunkApiError(userService.getUsers),
);

export const getPostList = createAsyncThunk(
  '/posts/get-data',
  handleThunkApiError(postService.getPosts),
);

export const getPost = createAsyncThunk(
  '/post/get-data',
  handleThunkApiError(postService.getPostById),
);

export const getCommentsList = createAsyncThunk(
  '/comments/get-data',
  handleThunkApiError(commentsService.getComments),
);

export const deletePost = createAsyncThunk(
  '/post/delete',
  handleThunkApiError(postService.deletePostById),
);

export const createPost = createAsyncThunk(
  '/post/create',
  handleThunkApiError(postService.createPost),
);

export const editPostById = createAsyncThunk(
  '/post/edit',
  handleThunkApiError(postService.editPostById),
);

