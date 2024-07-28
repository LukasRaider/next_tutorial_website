import Head from 'next/head';

export const metadata = {
  title: "Signup Page",
  description: "Detail",
  property: "og:title",
  content: "My page title",
  key: "title",
};

import React from 'react'

const Page = () => {
  redirect("/");
  return (
    <div>
      SignUp
    </div>
  );
};

export default Page;
