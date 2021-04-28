import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";

export default function Posts({ posts }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(async () => {}, []);

  return (
    <>
      <MainLayout title="Posts">
        <h1>Posts page</h1>
        {posts.map((e) => {
          console.log(e);
          return (
            <Link key={e.id} href="/post/[postId]" as={`/post/${e.id}`}>
              <a>{e.title}</a>
            </Link>
          );
        })}
      </MainLayout>
    </>
  );
}

Posts.getInitialProps = async () => {
  const posts = await (await fetch("http://localhost:3010/posts")).json();
  return { posts };
};
