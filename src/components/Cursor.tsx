import Image from "next/image";
import { useState, useEffect, RefObject } from "react";

const Cursor = ({
  forwardRef,
  yValue,
}: {
  forwardRef: RefObject<any>;
  yValue: number;
}) => {
  const [cursorPosition, setCursorPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    async function animateCursor() {
      if (!forwardRef.current) return;
      // Initial 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move the cursor to the claim button
      const buttonRect = forwardRef.current.getBoundingClientRect();
      const x = buttonRect.x + buttonRect.width / 2;
      const y = buttonRect.y + buttonRect.height / 2;
      setCursorPosition({ x, y });

      // Additional 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newY = y + yValue;
      setCursorPosition({ x, y: newY });
      forwardRef.current.classList.remove(`translate-y-[-${yValue}px]`);

      // Additional 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Move the cursor out of the screen
      setCursorPosition({ x: window.innerWidth - 100, y: -100 });
    }

    animateCursor();
  }, []);

  return (
    <Image
      className={`duration-700 absolute transition-all ease-in-out z-50`}
      style={{
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
      }}
      alt="Cursor"
      src="/images/cursor.svg"
      width={80}
      height={50}
    />
  );
};
export default Cursor;
