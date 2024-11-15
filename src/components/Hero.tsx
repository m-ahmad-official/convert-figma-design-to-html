import Image from "next/image";

export default function Hero(data: { font: { className: string } }) {
  return (
    <div className={`${data.font.className} hero-parent`}>
      <div className="hero">
        <div className="hero-child">
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button>Download Resume</button>
        </div>
        <Image
          src="/image.png"
          alt="men"
          height={350}
          width={350}
          className="hero-image"
        />
      </div>
    </div>
  );
}
