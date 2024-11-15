import Image from "next/image";

export default function Featured(data: { font: { className: string } }) {
  return (
    <div className={`${data.font.className} featured-heading`}>
      <h2>Featured works</h2>
      <div className="featured-parent">
        <div className="featured">
          <Image
            src={"/image1.png"}
            height={180}
            width={246}
            alt="trading"
            className="featured-image"
          />
          <div className="featured-child">
            <h1>Designing Dashboards</h1>
            <div className="featured-year">
              <h3>2020</h3>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="featured">
          <Image
            src={"/image2.png"}
            height={180}
            width={246}
            alt="trading"
            className="featured-image"
          />
          <div className="featured-child">
            <h1>Designing Dashboards</h1>
            <div className="featured-year">
              <h3>2020</h3>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="featured">
          <Image
            src={"/image3.png"}
            height={180}
            width={246}
            alt="trading"
            className="featured-image"
          />
          <div className="featured-child">
            <h1>Designing Dashboards</h1>
            <div className="featured-year">
              <h3>2020</h3>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
