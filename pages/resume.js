import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";

// Data
import { name, showResume } from "../data/portfolio.json";
import resumePic from "../public/image/resume-pic.png"; // ✅ Correct way to import image

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme(); // Optional: if you want to use `theme`
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src={resumePic}
        alt={`${name}'s Resume`}
        width={800}
        height={1100}
        priority
      />
    </div>
  );
};

export default Resume;
