import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section>
        <Link to="/about/1/nabil">satu</Link>
        <Link to="/about/2/hilmi">dua</Link>
        <Link to="/about/3/sugih">tiga</Link>
      </section>
      ini adalah page about
    </div>
  );
}
