import type { AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

type ThunkApi<Action, Response> = Parameters<AsyncThunkPayloadCreator<Response, Action>>[1];

export const handleThunkApiError = <Action, Response>(
  service: (action: Action, thunkAPI?: ThunkApi<Response, Action>) => Promise<Response>,
) => {
  return async (action: Action, thunkAPI: ThunkApi<Response, Action>) => {
    try {
      return await service(action, thunkAPI);
    } catch (exception) {
      console.log(`Error querying repository: ${exception}`);
      throw exception;
    }
  };
};
