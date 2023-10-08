"use client";
import Cursor from "@/components/Cursor";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import styles from "@/styles/landingpage.module.css";
import { cn } from "@/utils/tailwind-utils";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const nameRef = useRef<any>(null);
  const yValue = 75;

  return (
    <>
      <main>
        <GridBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <Navbar />
          <section className="text-5xl sm:text-8xl font-black mt-10 sm:mt-20 leading-normal px-4 sm:px-10">
            <h1>Chat</h1>
            <h1>Reimagined</h1>
          </section>
        </div>
        <div className="w-[300px] absolute bottom-12 left-1/2 translate-x-[-50%] flex gap-2 z-50 justify-center">
          Made With
          <Heart className="inline-block" />
          By
          <Link
            href="https://www.github.com/ManasMadan"
            target="_blank"
            className={`underline translate-y-[-${yValue.toString()}px] transition-transform`}
            ref={nameRef}
          >
            Manas Madan
          </Link>
        </div>

        {/* Triangles */}
        <div
          className={cn(
            "hidden lg:block",
            styles["custom-shape-divider-bottom"]
          )}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className={styles["shape-fill"]}
            ></path>
          </svg>
        </div>
        <div
          className={cn(
            "block lg:hidden",
            styles["custom-shape-divider-bottom-2"]
          )}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className={styles["shape-fill"]}
            ></path>
          </svg>
        </div>
        <Cursor yValue={yValue} forwardRef={nameRef} />
      </main>
    </>
  );
}
