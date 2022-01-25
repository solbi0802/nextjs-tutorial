import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "pink" : "black" }}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "pink" : "black" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
