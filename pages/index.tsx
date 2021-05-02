import Link from 'next/link'
import { useSelector } from 'react-redux'

import { Ipost, State } from '../typescript/types'

import { AppThunkDispatch, wrapper } from '../redux/store'
import { fetchPosts } from '../redux/posts'

import { ListLink, ListTitle, ListBody, List, ListItem, PageTitle } from '../styled/pages/index'

export default function Index(): JSX.Element {
  const posts = useSelector((state: State) => state.posts.entities)

  const sortedPosts = [...posts].sort(function (a, b) {
    if (a.id < b.id) {
      return 1
    }
    if (a.id > b.id) {
      return -1
    }
    return 0
  })

  return (
    <>
      <PageTitle>Latest Posts</PageTitle>
      <List>
        {sortedPosts.map(({ id, title = 'Empty Title', body = 'Empty Body' }) => (
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
  )
}

export const getStaticProps = wrapper.getStaticProps(async (ctx) => {
  const dispatch = ctx.store.dispatch as AppThunkDispatch

  const state = ctx.store.getState()
  const posts: Ipost[] = state.posts.entities

  if (posts.length === 0) await dispatch(fetchPosts())

  return {}
})
