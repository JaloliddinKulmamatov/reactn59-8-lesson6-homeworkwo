"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer);
          router.push("/", { scroll: false });
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-7xl font-bold">404 - Topilmadi</h1>
      <p
        className={`mt-5 py-2 px-6 rounded-xl text-2xl font-semibold ${
          count <= 1 ? "bg-red-500" : "bg-yellow-500"
        }`}
      >
        {count} soniyada ortga qaytiladi
      </p>
    </main>
  );
};

export default NotFound;
