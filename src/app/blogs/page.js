"use client";
import { useRouter } from "next/navigation";

export const metadata = {
    title: "Intro Page",
    description: "Detail",
  };

const Page = () => {
    const router = useRouter();
    return (
        <html lang="en">
        <body>
        <ul className="home-menu">
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/Login-form">Login Form</Link>
          </li>
          <li>
            <Link href="/Login-form/Signup">Signup</Link>
          </li>
          <li>
            <Link href="/API">API</Link>
          </li>
          <li>
            <Link href="/serverapi">Server API</Link>
          </li>
          </ul>
          </body>
      </html>
    );
};

export default Page;