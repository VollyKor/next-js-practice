import Link from 'next/link'

import { fetchPostsById } from '../../redux/posts'
import { AppThunkDispatch, wrapper } from '../../redux/store'

import { Title, Body, StyledLink } from '../../styled/pages/[postId]'
import { Ipost } from '../../typescript/types'

interface Props {
  post: Ipost
}

export default function Posts({ post }: Props): React.ReactNode {
  return (
    <>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>

      <Link href="/">
        <StyledLink>Back to posts</StyledLink>
      </Link>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const dispatch = ctx.store.dispatch as AppThunkDispatch
  const state = ctx.store.getState()

  const postsFromState = state.posts.entities as Ipost[]
  const postFromState = postsFromState.find((e) => e.id.toString() === ctx.query.postId)

  if (postFromState) return { props: { post: postFromState } }

  await dispatch(fetchPostsById(ctx.query.postId as string))

  const newState = ctx.store.getState()
  const posts = newState.posts.entities

  const post = posts.find((e) => e.id.toString() === ctx.query.postId)

  return { props: { post } }
})
