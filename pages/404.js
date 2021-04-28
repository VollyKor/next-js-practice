import Link from "next/link";

export default function NotFoundError() {
  return (
    <div>
      <h1>Error 404</h1>
      <Link href="/">
        <a>Go main</a>
      </Link>
    </div>
  );
}
