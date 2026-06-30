import type { Config } from "tailwindcss";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { typography } from "./src/theme/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: {
        sans: typography.fontFamily.sans,
      },
      boxShadow: {
        soft: "0 18px 45px rgb(15 23 42 / 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
