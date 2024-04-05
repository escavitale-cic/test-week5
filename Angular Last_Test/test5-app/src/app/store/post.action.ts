import { createAction, props } from '@ngrx/store';

export const setLastViewedPostId = createAction(
  '[Post] Set Last Viewed Post ID',
  props<{ postId: number }>()
);
