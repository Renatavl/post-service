import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

export const appStateSelector = ({ app }: RootState) => app;
export const userListState = createSelector(appStateSelector, (state) => state.userList);
export const postListState = createSelector(appStateSelector, (state) => state.postList);
export const postState = createSelector(appStateSelector, (state) => state.post);
export const commentsListState = createSelector(appStateSelector, (state) => state.commentsList);