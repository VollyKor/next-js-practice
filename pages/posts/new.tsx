import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostThunk } from '../../redux/posts';
import { useRouter } from 'next/router';

import * as S from '../../styled/pages/new';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  function setValue(e) {
    return e.currentTarget.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addPostThunk({ title, body }));

    setTitle('');
    setBody('');

    router.push('/');
  }

  return (
    <>
      <S.Title>AddPost</S.Title>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <S.Label htmlFor="">
          <S.LabelText>Title</S.LabelText>
          <S.Input type="text" value={title} onChange={(e) => setTitle(setValue(e))} />
        </S.Label>
        <S.Label htmlFor="">
          <S.LabelText>Body</S.LabelText>
          <S.TextArea value={body} onChange={(e) => setBody(setValue(e))} />
        </S.Label>

        <S.Button type="submit">Add Post</S.Button>
      </S.Form>
    </>
  );
}
