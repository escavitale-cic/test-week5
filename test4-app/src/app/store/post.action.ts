import { createAction, props } from '@ngrx/store';

export const setLastViewedPostId = createAction(
  '[Post] Last Viewed Post',
  props<{ postId: number }>()
);