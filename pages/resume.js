import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import { name, showResume } from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
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
      <img
        src="/image/resume-pic.png"
        alt={`${name}'s Resume`}
        width={800}
        height={1100}
      />
    </div>
  );
};

export default Resume;
