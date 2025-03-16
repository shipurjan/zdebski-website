// apps/web/src/app/foto/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography | zdebski.me",
  description: "Photography portfolio of zdebski",
};

export default function FotoPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Photography</h1>
        <p className="text-lg mb-4">
          Welcome to my photography portfolio. This content is served from the
          foto subdomain.
        </p>
      </div>
    </div>
  );
}
