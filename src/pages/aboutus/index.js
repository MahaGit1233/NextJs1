import Link from "next/link";

function aboutUs() {
  return (
    <div>
      <h1>This page tells about us</h1>
      <ul>
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li>
      </ul>
    </div>
  );
}

export default aboutUs;
