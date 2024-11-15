import Link from "next/link";

export default function Header(data: { font: { className: string } }) {
  return (
    <header className={`${data.font.className}`}>
      <ul className="header">
        <li>
          <Link href={"/"}>Works</Link>
        </li>
        <li>
          <Link href={"/"}>Blog</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
    </header>
  );
}
