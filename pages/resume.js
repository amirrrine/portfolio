import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import data from "../data/portfolio.json";
import ResumeCard from "../components/ResumeCard";

const Resume = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className=" mt-10 laptop:mt-30 p-2 laptop:p-0">
      <h1 className="text-2xl font-bold"></h1>

      <div className="mt-5 content-center justify-items-center">
        {data.resume.map((resume) => (
          <ResumeCard
            name={resume.title}
            key={resume.id}
            img={resume.imageSrc}
            description={resume.description}
            onClick={() => window.open(resume.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Resume;
