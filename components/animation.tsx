"use client";

import { useRef, useEffect } from "react";

export default function HeroRingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W = 0,
      H = 0,
      cx = 0,
      cy = 0,
      baseR = 0;

    const NUM_STRANDS = 28;
    const PTS = 360;
    const LOOP_SEC = 8;
    const TAU = Math.PI * 2;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const s = rect.width;
      W = s * dpr;
      H = s * dpr;
      canvas.width = W;
      canvas.height = H;
      canvas.style.height = `${s}px`;
      cx = W / 2;
      cy = H / 2;
      baseR = W * 0.38 *0.8;
    };
    resize();
    window.addEventListener("resize", resize);

    const centreline = (t: number, phase: number) => {
      const n = 3.5;
      const exp = 2.0 / n;
      const ct = Math.cos(t);
      const st = Math.sin(t);
      const sgnC = ct >= 0 ? 1 : -1;
      const sgnS = st >= 0 ? 1 : -1;

      const sx = sgnC * Math.pow(Math.abs(ct), exp);
      const sy = sgnS * Math.pow(Math.abs(st), exp);

      const mod =
        1.0 +
        0.11 * Math.sin(t * 2 + phase * 1.0) +
        0.065 * Math.sin(t * 3 - phase * 0.6) +
        0.04 * Math.sin(t * 1 + phase * 0.4);

      return { x: sx * baseR * mod, y: sy * baseR * mod };
    };

    const tangent = (t: number, phase: number) => {
      const dt = 0.001;
      const a = centreline(t - dt, phase);
      const b = centreline(t + dt, phase);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      return { x: dx / len, y: dy / len };
    };

    const normal = (t: number, phase: number) => {
      const tg = tangent(t, phase);
      return { x: -tg.y, y: tg.x };
    };

    const arcColor = (t: number) => {
      const n = (((t / TAU) % 1) + 1) % 1;
      let r = 0,
        g = 0,
        b = 0;
      if (n < 0.15) {
        const s = n / 0.15;
        r = 255 - s * 200;
        g = 255;
        b = 255;
      } else if (n < 0.3) {
        const s = (n - 0.15) / 0.15;
        r = 55 - s * 35;
        g = 255 - s * 15;
        b = 255;
      } else if (n < 0.55) {
        const s = (n - 0.3) / 0.25;
        r = 20;
        g = 240 - s * 100;
        b = 255 - s * 20;
      } else if (n < 0.85) {
        const s = (n - 0.55) / 0.3;
        r = 20 + s * 30;
        g = 140 - s * 40;
        b = 235;
      } else {
        const s = (n - 0.85) / 0.15;
        r = 50 + s * 205;
        g = 100 + s * 155;
        b = 235 + s * 20;
      }
      return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, W, H);
      const phase = (time * 0.001 * (TAU / LOOP_SEC)) % TAU;
      const twistPhase = phase;
      const ribbonW = baseR * 0.18;

      for (let i = 0; i < NUM_STRANDS; i++) {
        const strandPos = (i / (NUM_STRANDS - 1)) * 2 - 1;
        ctx.beginPath();

        for (let j = 0; j <= PTS; j++) {
          const t = (j / PTS) * TAU;
          const c = centreline(t, phase);
          const norm = normal(t, phase);
          const twistAngle = t * 2 + twistPhase + i * 0.02;
          const twistCos = Math.cos(twistAngle);
          const offset = strandPos * ribbonW * twistCos;
          const px = cx + c.x + norm.x * offset;
          const py = cy + c.y + norm.y * offset;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        const colorT = ((i / NUM_STRANDS) * TAU + phase * 0.4) % TAU;
        ctx.strokeStyle = arcColor(colorT);
        ctx.lineWidth = 1.15 * dpr;
        ctx.globalAlpha = 0.78;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", maxWidth: 550, background: "transparent" }}
    />
  );
}
