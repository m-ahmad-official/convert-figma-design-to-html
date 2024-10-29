import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div style={{ height: "243px", marginTop: "240px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "625px",
          marginRight: "625px",
        }}
      >
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
          <Image
            src={"/instagram.png"}
            width={30}
            height={30}
            alt="instagram"
          />
        </Link>
        <Link href={"/"}>
          <Image src={"/twitter.png"} width={30} height={30} alt="twitter" />
        </Link>

        <Link href={"/"}>
          {" "}
          <Image src={"/linkedin.png"} width={30} height={30} alt="linkedin" />
        </Link>
      </div>
      <p
        style={{
          // fontFamily: "Heebo",
          fontSize: "22px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
}
