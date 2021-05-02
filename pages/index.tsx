import Link from 'next/link';
import { useSelector } from 'react-redux';

import { State } from '../typescript/types';

import { AppThunkDispatch, wrapper } from '../redux/store';
import { fetchPosts } from '../redux/posts';

import { ListLink, ListTitle, ListBody, List, ListItem, PageTitle } from '../styled/pages/index';

export default function Index() {
  const posts: any[] = useSelector((state: State) => state.posts.posts);

  return (
    <>
      <PageTitle>Latest Posts</PageTitle>
      <List>
        {posts.map(({ id, title = 'Empty Title', body = 'Empty Body' }) => (
          <ListItem key={id}>
            <ListTitle>{title}</ListTitle>
            <ListBody>{body.slice(0, 200)}</ListBody>
            <Link href={`/posts/${id}`}>
              <ListLink>{'Read more'}</ListLink>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const dispatch = ctx.store.dispatch as AppThunkDispatch;

  await dispatch(fetchPosts());

  return {};
});
