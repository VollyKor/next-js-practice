import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewComment, fetchPostsById } from '../../redux/posts'
import { AppThunkDispatch, wrapper } from '../../redux/store'

import { Title, Body, StyledLink, Input, Button, Comment } from '../../styled/pages/[postId]'

import { InewComment, IpostWithComments, State } from '../../typescript/types'

interface Props {
  post: IpostWithComments
}

export default function Posts({ post }: Props): React.ReactNode {
  const [newComment, setNewComment] = useState('')
  const dispatch = useDispatch()

  const StatePost = useSelector((state: State) =>
    state.posts.entities.find((el) => el.id === post.id)
  )

  function sendNewComment(): void {
    const data: InewComment = { postId: post.id, body: newComment }
    dispatch(addNewComment(data))
    setNewComment('')
  }

  return (
    <>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      <h3>Comments</h3>

      <div>
        <Input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <Button onClick={() => sendNewComment()}>AddComment</Button>
      </div>

      {StatePost && StatePost.comments?.map((el) => <Comment key={el.id}>{el.body}</Comment>)}

      <Link href="/">
        <StyledLink>Back to posts</StyledLink>
      </Link>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  const dispatch = ctx.store.dispatch as AppThunkDispatch
  const postId = ctx.query.postId

  await dispatch(fetchPostsById(postId as string))

  const newState = ctx.store.getState()
  const posts = newState.posts.entities

  const post = posts.find((e) => e.id.toString() === postId)

  return { props: { post } }
})
