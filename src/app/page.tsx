"use client";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <main className="flex flex-col py-12 px-4 absolute top-[40%] left-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="w-full text-3xl sm:text-5xl text-center">
        <span className="block sm:inline leading-loose underline text-warning-400 underline-offset-2 sm:underline-offset-8">
          dash
        </span>{" "}
        <span>is a Chat App made for</span>
      </div>
      <div className="text-3xl sm:text-5xl text-center text-success-400">
        <span className="relative top-5 text-danger-500">D</span>evelopers
      </div>
      <div className="mt-12 flex gap-4 justify-center">
        <Button
          className="text-2xl px-6 py-6 hover:bg-primary"
          color="default"
          variant="bordered"
          endContent={<ArrowRight />}
        >
          Get Started
        </Button>
      </div>
    </main>
  );
}
