import { AnimatedLogo } from "@repo/ui/animated-logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-12">
        {/* Header with name */}
        <header className="text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-2">
            Cyprian Zdebski
          </h1>
          <p className="text-lg opacity-80">
            Frontend Developer · Photographer · Japanese Enthusiast
          </p>
        </header>

        {/* Animated center piece */}
        <div className="flex justify-center py-6">
          <AnimatedLogo />
        </div>

        {/* Brief introduction */}
        <div className="prose prose-lg mx-auto text-center">
          <p>
            Welcome to my digital home. This is where I share my thoughts,
            projects, and photography — a personal space that reflects my
            interests and creative work.
          </p>
        </div>

        {/* Navigation */}
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <Link
            href="/blog"
            className="group border rounded-lg p-6 transition-all hover:border-foreground"
          >
            <h2 className="text-xl font-semibold mb-2">Blog</h2>
            <p className="opacity-70 group-hover:opacity-100">
              Thoughts, ideas, and tutorials on development, automation, and
              more.
            </p>
          </Link>

          <Link
            href="/foto"
            className="group border rounded-lg p-6 transition-all hover:border-foreground"
          >
            <h2 className="text-xl font-semibold mb-2">Photography</h2>
            <p className="opacity-70 group-hover:opacity-100">
              Full resolution images from my explorations and travels.
            </p>
          </Link>

          <Link
            href="/projects"
            className="group border rounded-lg p-6 transition-all hover:border-foreground"
          >
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <p className="opacity-70 group-hover:opacity-100">
              Personal and professional work spanning web development and
              automation.
            </p>
          </Link>
        </nav>

        {/* Footer */}
        <footer className="text-center pt-12 pb-4 opacity-60 text-sm">
          <p>Built with precision using Next.js, TypeScript, and TailwindCSS</p>
        </footer>
      </div>
    </main>
  );
}
