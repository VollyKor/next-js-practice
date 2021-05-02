import Link from 'next/link';
import { useSelector } from 'react-redux';

import { fetchPostsById } from '../../redux/posts';
import { AppThunkDispatch, wrapper } from '../../redux/store';
import { State } from '../../typescript/types';

import { Title, Body, StyledLink } from '../../styled/pages/[postId]';

export default function Posts({ postId }) {
  const post = useSelector((state: State) => {
    const posts = state.posts.posts;

    return posts.find((e) => e.id.toString() === postId);
  });

  return (
    <>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>

      <Link href="/">
        <StyledLink>Back to posts</StyledLink>
      </Link>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const dispatch = ctx.store.dispatch as AppThunkDispatch;

  await dispatch(fetchPostsById(ctx.query.postId as string));
  return { props: { postId: ctx.query.postId } };
});
