import { type JSX } from "react";

export function Card({
  className,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <p>{children}</p>
    </a>
  );
}
