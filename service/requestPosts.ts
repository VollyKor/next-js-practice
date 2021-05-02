import { default as req } from 'axios';

req.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const getPosts = async () => {
  try {
    const { data } = await req.get('/posts');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPostsById = async (id: string | number) => {
  try {
    const { data } = await req.get(`/posts/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addPost = async (post) => {
  try {
    const newPost = await req.post(`/posts`, post);
    console.log(newPost);

    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};
