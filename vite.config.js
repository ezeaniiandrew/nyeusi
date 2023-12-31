import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

const folders = fs.readdirSync("./src", { withFileTypes: true });
const fileNames = folders
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const filePaths = fileNames.reduce((acc, currentPath) => {
  const key = `@/${[currentPath]}`;

  return {
    ...acc,
    [key]: `/${currentPath === "src" ? currentPath : "src/" + currentPath}`,
  };
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...filePaths,
    },
  },
});
