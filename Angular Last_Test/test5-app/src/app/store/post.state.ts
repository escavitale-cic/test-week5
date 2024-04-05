// post.state.ts

import { createReducer, on, Action } from '@ngrx/store';
import { setLastViewedPostId } from "./post.action";

export interface PostState {
  lastViewedPostId: number | null;
}

export const initialState: PostState = {
  lastViewedPostId: null,
};

export const postReducer = createReducer(
  initialState,
  on(setLastViewedPostId, (state, { postId }) => ({
    ...state,
    lastViewedPostId: postId,
  }))
);
