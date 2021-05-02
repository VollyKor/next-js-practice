import { default as req } from 'axios'
import { InewPost, Ipost } from '../typescript/types'

req.defaults.baseURL = 'https://simple-blog-api.crew.red'

export const getPosts = async (): Promise<Ipost[]> => {
  try {
    const { data } = await req.get<Ipost[]>('/posts')
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const getPostsById = async (id: string | number): Promise<Ipost> => {
  try {
    const { data } = await req.get<Ipost>(`/posts/${id}`)
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
