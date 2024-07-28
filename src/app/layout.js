import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import "./home.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next tutorial website",
  description: "Created by Lukas Huvar",
};

export default function RootLayout({ children }) {
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
}
