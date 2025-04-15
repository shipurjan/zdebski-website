"use client";

import { useEffect, useState } from "react";

export function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimating(true);

    const timer = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-64 h-64 relative cursor-pointer">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-20"
        />

        {/* Camera lens representation */}
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-90" : "opacity-30"}`}
        />

        {/* Aperture blades - using predefined paths to avoid hydration issues */}
        <path
          d="M 100 100 L 135 165 A 70 70 0 0 1 65 165 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-60" : "opacity-20"}`}
          style={{
            transformOrigin: "center",
            transform: `rotate(${isAnimating ? 10 : 0}deg)`,
            transitionDelay: "0ms",
          }}
        />
        <path
          d="M 100 100 L 170 135 A 70 70 0 0 1 135 165 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-60" : "opacity-20"}`}
          style={{
            transformOrigin: "center",
            transform: `rotate(${isAnimating ? 10 : 0}deg)`,
            transitionDelay: "100ms",
          }}
        />
        <path
          d="M 100 100 L 170 65 A 70 70 0 0 1 170 135 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-60" : "opacity-20"}`}
          style={{
            transformOrigin: "center",
            transform: `rotate(${isAnimating ? 10 : 0}deg)`,
            transitionDelay: "200ms",
          }}
        />
        <path
          d="M 100 100 L 135 35 A 70 70 0 0 1 170 65 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-60" : "opacity-20"}`}
          style={{
            transformOrigin: "center",
            transform: `rotate(${isAnimating ? 10 : 0}deg)`,
            transitionDelay: "300ms",
          }}
        />
        <path
          d="M 100 100 L 65 35 A 70 70 0 0 1 135 35 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-60" : "opacity-20"}`}
          style={{
            transformOrigin: "center",
            transform: `rotate(${isAnimating ? 10 : 0}deg)`,
            transitionDelay: "400ms",
          }}
        />
        <path
          d="M 100 100 L 30 65 A 70 70 0 0 1 65 35 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={`transition-all duration-1000 ${isAnimating ? "opacity-60" : "opacity-20"}`}
          style={{
            transformOrigin: "center",
            transform: `rotate(${isAnimating ? 10 : 0}deg)`,
            transitionDelay: "500ms",
          }}
        />

        {/* Text elements for code representation - using static positions */}
        <g className="opacity-70">
          <text
            x="190"
            y="100"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 1 : 0.4, transitionDelay: "0ms" }}
          >
            &lt;&gt;
          </text>
          <text
            x="164"
            y="164"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 0.4 : 1, transitionDelay: "75ms" }}
          >
            /&gt;
          </text>
          <text
            x="100"
            y="190"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 1 : 0.4, transitionDelay: "150ms" }}
          >
            {"{...}"}
          </text>
          <text
            x="36"
            y="164"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 0.4 : 1, transitionDelay: "225ms" }}
          >
            &#40;&#41;
          </text>
          <text
            x="10"
            y="100"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 1 : 0.4, transitionDelay: "300ms" }}
          >
            &#91;&#93;
          </text>
          <text
            x="36"
            y="36"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 0.4 : 1, transitionDelay: "375ms" }}
          >
            ?.
          </text>
          <text
            x="100"
            y="10"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 1 : 0.4, transitionDelay: "450ms" }}
          >
            /*
          </text>
          <text
            x="164"
            y="36"
            fontSize="8"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="font-mono transition-all duration-1000"
            style={{ opacity: isAnimating ? 0.4 : 1, transitionDelay: "525ms" }}
          >
            */
          </text>
        </g>

        {/* Japanese characters in a circle - using static positions */}
        <g className="opacity-80">
          <text
            x="165"
            y="100"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{ opacity: isAnimating ? 0.9 : 0.3, transitionDelay: "0ms" }}
          >
            日
          </text>
          <text
            x="146"
            y="146"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.3 : 0.9,
              transitionDelay: "100ms",
            }}
          >
            本
          </text>
          <text
            x="100"
            y="165"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.9 : 0.3,
              transitionDelay: "200ms",
            }}
          >
            語
          </text>
          <text
            x="54"
            y="146"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.3 : 0.9,
              transitionDelay: "300ms",
            }}
          >
            ツ
          </text>
          <text
            x="35"
            y="100"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.9 : 0.3,
              transitionDelay: "400ms",
            }}
          >
            ク
          </text>
          <text
            x="54"
            y="54"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.3 : 0.9,
              transitionDelay: "500ms",
            }}
          >
            リ
          </text>
          <text
            x="100"
            y="35"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.9 : 0.3,
              transitionDelay: "600ms",
            }}
          >
            エ
          </text>
          <text
            x="146"
            y="54"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
            className="transition-all duration-1500"
            style={{
              opacity: isAnimating ? 0.3 : 0.9,
              transitionDelay: "700ms",
            }}
          >
            実
          </text>
        </g>
      </svg>
    </div>
  );
}
