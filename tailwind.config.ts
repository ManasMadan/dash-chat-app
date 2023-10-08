import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#111",
            foreground: "#ffffff",
            focus: "#9ca3af",
            divider: "#9ca3af",
          },
        },
      },
    }),
  ],
};
export default config;
