"use client";
import { useEffect, useRef } from "react";
export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let time = 0;
    const waves = 3;
    const colors = [
      "rgba(56, 189, 248, 0.2)",
      "rgba(59, 130, 246, 0.2)",
      "rgba(29, 78, 216, 0.2)",
    ];
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < waves; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin(x * 0.003 + time + i) * 50 +
            Math.sin(x * 0.001 + time + i) * 50 +
            canvas.height / 1.5;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = colors[i];
        ctx.fill();
      }
      time += 0.002;
      requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "linear-gradient(to bottom, #020817, #1e3a8a)" }}
    />
  );
}
