import Link from "next/link";

export default function Header() {
  return (
    <ul
      style={{
        // fontFamily: "Inter",
        fontWeight: "500",
        fontSize: "20px",
        display: "flex",
        justifyContent: "end",
        marginTop: "60px",
      }}
    >
      <li>
        <Link href={"/"}>Works</Link>
      </li>
      <li style={{ marginLeft: "50px" }}>
        <Link href={"/"}>Blog</Link>
      </li>
      <li style={{ marginLeft: "50px", marginRight: "90px" }}>
        <Link href={"/"}>Contact</Link>
      </li>
    </ul>
  );
}
