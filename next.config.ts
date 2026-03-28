import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const deployTarget =
  process.env.DEPLOY_TARGET ?? (isGithubActions ? "github-pages" : "default");
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  deployTarget === "github-pages" && repositoryName
    ? `/${repositoryName}`
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
