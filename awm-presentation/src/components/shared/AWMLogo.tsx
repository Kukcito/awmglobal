interface AWMLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function AWMLogo({ variant = 'light', size = 'md', className = '' }: AWMLogoProps) {
  const sizes = {
    sm: { svg: 48, text: 'text-lg' },
    md: { svg: 72, text: 'text-2xl' },
    lg: { svg: 96, text: 'text-3xl' },
    xl: { svg: 140, text: 'text-5xl' },
  };

  const color = variant === 'light' ? '#45ac41' : '#ffffff';
  const textColor = variant === 'light' ? '#45ac41' : '#ffffff';
  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized A - upward arrow with mountain/peak shape */}
        <polygon
          points="50,8 90,92 68,92 50,52 32,92 10,92"
          fill={color}
          stroke="none"
        />
        {/* Crossbar */}
        <rect x="30" y="66" width="40" height="7" fill={variant === 'light' ? '#12331c' : '#1a3e24'} />
      </svg>
      <div
        className={`font-montserrat font-bold tracking-[0.25em] uppercase ${s.text}`}
        style={{ color: textColor, letterSpacing: '0.3em' }}
      >
        AWM
      </div>
      <div
        className="font-montserrat font-light tracking-widest text-xs uppercase mt-1"
        style={{ color: textColor, opacity: 0.8, letterSpacing: '0.2em' }}
      >
        Global Wealth Management
      </div>
    </div>
  );
}
