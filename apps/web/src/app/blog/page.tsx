// apps/web/src/app/blog/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | zdebski.me",
  description: "Personal blog of zdebski",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-lg mb-4">
          Welcome to my blog. This content is served from the blog subdomain.
        </p>
      </div>
    </div>
  );
}
