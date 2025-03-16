import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Load certificates for HTTPS in development
const isDev = process.env.NODE_ENV === "development";
const httpsOptions = isDev
  ? {
      key: fs.readFileSync(path.join(process.cwd(), "_localhost-key.pem")),
      cert: fs.readFileSync(path.join(process.cwd(), "_localhost.pem")),
    }
  : undefined;

const nextConfig: NextConfig = {
  ...(isDev && {
    server: {
      https: httpsOptions,
    },
  }),
};

export default nextConfig;
