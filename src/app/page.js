'use client';
import Login from "./Login";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect,useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import img from '../../public/vercel.svg';

export const metadata = {
  title: "Main Page",
  description: "Detail Main page",
};

export default function Home() {
 const router = useRouter();
 const navigate = (blog) => {
  router.push('/blogs/' + blogs);
 }

  return (
    <main>
    <button onClick={()=>router.push("/blogs")}>Go to Blogs Page</button>
    <br /><br />
    <button onClick={()=>router.push("/Login-form")}>Go to Login form</button>
    <br /><br />
    <button onClick={()=>router.push("/Login-form/Signup")}>Signup</button>
    <br /><br />
    <button onClick={()=>navigate("Newblog")}>Newsblog</button>
    <Image alt="img" src="https://images/unsplash.com/photo-1688670565149-d1e7c8ea70a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fD88MHxwagG90by1wYWd1fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />

    <img src="../../vercel.svg" alt="imges" />
    </main>
  );
}
const Page = (props) => {
  return <div>{props.name} Page</div>;
};
