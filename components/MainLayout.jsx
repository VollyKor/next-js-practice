import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "Home Page" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </ul>
        </nav>

        <main>{children}</main>
      </header>
    </>
  );
}
