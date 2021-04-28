import Link from "next/link";

import MainLayout from "../../components/MainLayout";
export default function Post({ post }) {
  return (
    <MainLayout title={`Post | ${post.title} `}>
      <h1>Post with id {post.title} </h1>
      <p>{post.text}</p>
      <Link href="/posts">
        <a>Back to Posts</a>
      </Link>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  const id = ctx.query.postId;
  const post = await (await fetch(`http://localhost:3010/posts/${id}`)).json();

  return { post };
};
