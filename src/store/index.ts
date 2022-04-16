import { configureStore } from '@reduxjs/toolkit'
import SideMenuReducers from '../components/SideMenu/SideMenu.slice';
import ProjectReducers from '../views/Project/Project.slice';

const store = configureStore({
  reducer: {
    SideMenu: SideMenuReducers,
    Project: ProjectReducers,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch

export default store;