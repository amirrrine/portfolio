import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";
import { getAllPosts } from "../../utils/api";
import { ISOToDate } from "../../utils";

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{"Blog - " + data.name}</title>
        <meta
          name="description"
          content={"Articles and notes by " + data.name}
        />
      </Head>
      {data.showCursor && <Cursor />}

      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog={true} />
        <div className="mt-10 laptop:mt-32 p-2 laptop:p-0">
          <h1 className="text-2xl font-bold">Blog.</h1>
          <div className="mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <a className="block p-6 rounded-lg bg-white dark:bg-slate-800 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h2 className="text-2xl font-medium">{post.title}</h2>
                  <p className="mt-2 text-base opacity-60">{post.preview}</p>
                  <p className="mt-4 text-sm opacity-40">
                    {post.date ? ISOToDate(post.date) : ""}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(["date", "slug", "title", "preview"]);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;