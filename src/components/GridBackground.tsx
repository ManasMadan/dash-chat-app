import React from "react";
import Image from "next/image";

interface Props {}

const GridBackground: React.FC<Props> = (props) => {
  return (
    <>
      <div className="fixed inset-0 transition-color delay-100 duration-700 opacity-25 bg-primary-300" />
      <div
        style={{
          backgroundSize: "30px",
          backgroundImage: "url(/images/grid.svg)",
        }}
        className="fixed inset-0 opacity-30"
      />
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src="/images/gradient.svg"
      />
    </>
  );
};

export default GridBackground;
