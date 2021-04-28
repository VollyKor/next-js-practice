import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <>
      <MainLayout>
        <h1>Hello Next.JS</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
          <br />
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </p>
      </MainLayout>
    </>
  );
}
