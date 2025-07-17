// components/CustomCursor.tsx
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div
        className="fixed z-[9999] pointer-events-none"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Small dot */}
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>

      <div
        className="fixed z-[9998] pointer-events-none transition-all duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer circle */}
        <div className="w-8 h-8 border border-white rounded-full" />
      </div>
    </>
  );
};

export default CustomCursor;
