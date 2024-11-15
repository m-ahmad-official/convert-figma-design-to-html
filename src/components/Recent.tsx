import Link from "next/link";

export default function Recent(data: { font: { className: string } }) {
  return (
    <div className={`${data.font.className} recent-parent`}>
      <div className="recent">
        <div className="recent-child">
          <h5>Recent Post</h5>
          <Link href={"/"}>
            <h6>View all</h6>
          </Link>
        </div>
        <div className="card-parent">
          <div className="card">
            <h1>Making a design system from scratch</h1>
            <div className="card-date">
              <h6>12 Feb 2020</h6>|<h6>Design , Pattern</h6>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="card">
            <h1>Making a design system from scratch</h1>
            <div className="card-date">
              <h6>12 Feb 2020</h6>|<h6>Design , Pattern</h6>
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
