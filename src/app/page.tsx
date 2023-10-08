"use client";
import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <main>
        <GridBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <Navbar />
        </div>
      </main>
    </>
  );
}
