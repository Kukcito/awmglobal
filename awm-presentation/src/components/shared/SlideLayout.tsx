import { type ReactNode } from 'react';

interface SlideLayoutProps {
  children: ReactNode;
  background?: string;
  className?: string;
  id?: string;
}

export default function SlideLayout({ children, background, className = '', id }: SlideLayoutProps) {
  return (
    <div
      id={id}
      className={`slide-container relative overflow-hidden ${className}`}
      style={{ background: background || '#ffffff', fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </div>
  );
}
