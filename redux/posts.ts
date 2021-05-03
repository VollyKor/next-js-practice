import { createAction, createAsyncThunk, createSlice, isRejected } from '@reduxjs/toolkit'
import { getPosts, getPostsById, addPost, addComment } from '../service/requestPosts'
import { HYDRATE } from 'next-redux-wrapper'
import { InewComment, InewPost, InitialState } from '../typescript/types'

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

export const addNewComment = createAsyncThunk(
  'posts/addComment',
  async (comment: InewComment, { rejectWithValue }) => {
    try {
      return await addComment(comment)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const initialState: InitialState = { entities: [], loading: false, error: null }

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
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

      // Add comment
      // ==============================================
      .addCase(addNewComment.fulfilled, (state, { payload }) => {
        console.log('payload', payload)

        const post = state.entities.find((el) => el.id === payload.postId)
        console.log('post', post)

        post.comments = [payload, ...post.comments]

        const updatedPosts = state.entities.map((el) => {
          if (el.id === payload.id) return post
          return el
        })

        state.entities = updatedPosts
      })

      //  Handle reject
      // =====================================================
      .addMatcher(isRejected, (state, action) => {
        console.log('rejected', state, action)
      })
  },
})

export default postsSlice.reducer
