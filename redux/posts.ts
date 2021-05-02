import { createAction, createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit';
import { getPosts, getPostsById, addPost } from '../service/requestPosts';
import { HYDRATE } from 'next-redux-wrapper';

const hydrate = createAction(HYDRATE);

export const fetchPosts = createAsyncThunk('posts/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await getPosts();

    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchPostsById = createAsyncThunk(
  'posts/getById',
  async (postId: string, { rejectWithValue }) => {
    try {
      return await getPostsById(postId);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addPostThunk = createAsyncThunk(
  'posts/add',
  async (post: any, { rejectWithValue }) => {
    try {
      const response = await addPost(post);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // rehydrate
      // ================================================
      .addCase(hydrate, (state, action) => {
        // console.log('HYDRATE', state, action.payload);
        return {
          ...state,
          ...(action.payload as any)[postsSlice.name],
        };
      })

      // fetch posts
      // ================================================
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      // fetch posts byId
      // ===================================================
      .addCase(fetchPostsById.fulfilled, (state, action) => {
        state.posts = [action.payload, ...state.posts];
      })

      // Add post
      // ==============================================
      .addCase(addPostThunk.fulfilled, (state, action) => {
        console.log(action);
      })

      //  Handle reject
      // =====================================================
      .addMatcher(isRejected, (state, action) => {
        console.log('rejected');
      });
  },
});

export default postsSlice.reducer;
