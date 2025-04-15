import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | zdebski.me",
  description: "Personal and professional projects by Cyprian Zdebski",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-lg mb-4">
          Welcome to my projects showcase. Here you&apos;ll find both technical
          and creative work.
        </p>
        <p className="text-lg mb-4">
          This section is under development. Check back soon for a collection of
          my work.
        </p>
      </div>
    </div>
  );
}
