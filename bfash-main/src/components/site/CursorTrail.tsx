import { useEffect } from "react";

const trailLength = 20;
const dotSize = 10;
const followSpeed = 0.3;
const colors = ["#2563eb", "#7c3aed", "#f59e0b"];

export function CursorTrail() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dots = Array.from({ length: trailLength }, (_, index) => {
      const dot = document.createElement("div");
      dot.setAttribute("aria-hidden", "true");
      Object.assign(dot.style, {
        position: "fixed",
        left: "0",
        top: "0",
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: "9999",
        backgroundColor: colors[index % colors.length],
        opacity: String(1 - index / trailLength),
        visibility: "hidden",
        willChange: "transform",
      });
      document.body.appendChild(dot);
      return dot;
    });

    const positions = dots.map(() => ({ x: 0, y: 0 }));
    let target = { x: 0, y: 0 };
    let animationFrame = 0;
    let hasPointerPosition = false;

    const animate = () => {
      if (!hasPointerPosition) {
        animationFrame = 0;
        return;
      }

      positions.forEach((position, index) => {
        const destination = index === 0 ? target : positions[index - 1];
        if (index === 0) {
          position.x = target.x;
          position.y = target.y;
        } else {
          position.x += (destination.x - position.x) * followSpeed;
          position.y += (destination.y - position.y) * followSpeed;
        }

        const scale = (dots.length - index) / dots.length;
        dots[index].style.visibility = "visible";
        dots[index].style.transform =
          `translate3d(${position.x - dotSize / 2}px, ${position.y - dotSize / 2}px, 0) scale(${scale})`;
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: MouseEvent) => {
      target = { x: event.clientX, y: event.clientY };
      hasPointerPosition = true;
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return null;
}
