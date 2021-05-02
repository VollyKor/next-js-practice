import { createAction, createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit'
import { getPosts, getPostsById, addPost } from '../service/requestPosts'
import { HYDRATE } from 'next-redux-wrapper'
import { InewPost } from '../typescript/types'

const hydrate = createAction(HYDRATE)

export const fetchPosts = createAsyncThunk('posts/getAll', async (_, { rejectWithValue }) => {
  try {
    return await getPosts()
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const fetchPostsById = createAsyncThunk(
  'posts/getById',
  async (postId: string, { rejectWithValue }) => {
    try {
      return await getPostsById(postId)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addPostThunk = createAsyncThunk(
  'posts/add',
  async (post: InewPost, { rejectWithValue }) => {
    try {
      return await addPost(post)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState: { entities: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // rehydrate
      // ================================================
      .addCase(hydrate, (state, action) => {
        return {
          ...state,
          ...(action.payload as any)[postsSlice.name],
        }
      })

      // fetch posts
      // ================================================
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.entities = action.payload
      })

      // fetch posts byId
      // ===================================================
      .addCase(fetchPostsById.fulfilled, (state, action) => {
        state.entities = [action.payload, ...state.entities]
      })

      // Add post
      // ==============================================
      .addCase(addPostThunk.fulfilled, (state, { payload }) => {
        state.entities = [...state.entities, payload]
      })

      //  Handle reject
      // =====================================================
      .addMatcher(isRejected, (state, action) => {
        console.log('rejected', state, action)
      })
  },
})

export default postsSlice.reducer
