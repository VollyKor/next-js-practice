import { default as req } from 'axios'
import { Icomment, InewComment, InewPost, Ipost, IpostWithComments } from '../typescript/types'

req.defaults.baseURL = 'https://simple-blog-api.crew.red'

export const getPosts = async (): Promise<Ipost[]> => {
  try {
    const { data } = await req.get<Ipost[]>('/posts')
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getPostsById = async (id: string | number): Promise<IpostWithComments> => {
  try {
    const { data } = await req.get<IpostWithComments>(`/posts/${id}?_embed=comments`)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const addPost = async (post: InewPost): Promise<Ipost> => {
  try {
    const { data } = await req.post<Ipost>(`/posts`, post)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const addComment = async (comment: InewComment): Promise<Icomment> => {
  try {
    const { data } = await req.post<Icomment>(`/comments`, comment)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
