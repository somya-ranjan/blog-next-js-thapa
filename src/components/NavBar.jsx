import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <ul className="menu_bar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
