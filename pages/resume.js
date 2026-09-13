import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import data from "../data/portfolio.json";
import ResumeCard from "../components/ResumeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cursor from "../components/Cursor";

const Resume = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!data.showResume) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name + " - Resume"}</title>
        <meta
          name="description"
          content={data.resume.length > 0 ? data.resume[0].description : "Resume"}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="container mx-auto mb-10 min-h-screen">
        <Header isBlog={true} />
        <div className="mt-10 laptop:mt-32 p-2 laptop:p-0">
          <h1 className="text-2xl font-bold">Resume.</h1>

          <div className="mt-5 content-center justify-items-center">
            {data.resume.map((resume) => (
              <ResumeCard
                name={resume.title}
                key={resume.id}
                img={resume.imageSrc}
                description={resume.description}
                onClick={() => window.open(resume.url, "_blank")}
              />
            ))}
          </div>

          <div className="mt-10">
            <Button onClick={() => router.push("/")} classes="first:ml-0">
              ← Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
