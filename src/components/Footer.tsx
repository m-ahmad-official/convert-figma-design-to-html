import Image from "next/image";

import Link from "next/link";

export default function Footer(data: { font: { className: string } }) {
  return (
    <footer className={`${data.font.className}`}>
      <div className="icon">
        <Link
          href={"https://www.facebook.com/m.ahmad.official7"}
          target="_blank"
        >
          <Image src={"/fb.png"} width={30} height={30} alt="facebook" />
        </Link>
        <Link
          href={"https://www.instagram.com/m.ahmad.official"}
          target="_blank"
        >
          <Image src={"/instagram.png"} width={30} height={30} alt="insta" />
        </Link>
        <Link href={"/"}>
          <Image src={"/twitter.png"} width={30} height={30} alt="twitter" />
        </Link>
        <Link href={"/"}>
          <Image src={"/linkedin.png"} width={30} height={30} alt="linkedin" />
        </Link>
      </div>
      <p>Copyright ©2020 All rights reserved</p>
    </footer>
  );
}
