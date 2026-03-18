/**
 * AWM Logo — Based on official brand identity manual
 *
 * The AWM logo consists of three angular letterforms (A, W, M):
 *  - A: two thick diagonal strokes meeting at a peak, with a bright green (#45ac41) 
 *       rhombus/diamond accent on the lower-left leg
 *  - W: four thick diagonal strokes forming a W with outer peaks taller than center peak
 *  - M: two nearly-vertical outer strokes + two inner diagonal strokes forming a valley
 *
 * Correct usage per brand manual:
 *  - variant="onDark"  → white letters (#fff) + #45ac41 diamond  [for dark backgrounds]
 *  - variant="onLight" → dark green letters (#12331c) + #45ac41 diamond [for light backgrounds]
 *
 * Legacy: variant="dark"  maps to onDark, variant="light" maps to onLight
 */

interface AWMLogoProps {
  variant?: 'onDark' | 'onLight' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: number;
  showTagline?: boolean;
  className?: string;
}

const SIZE_MAP: Record<string, number> = {
  sm: 100,
  md: 145,
  lg: 200,
  xl: 270,
};

export default function AWMLogo({
  variant = 'onLight',
  size,
  width,
  showTagline = false,
  className = '',
}: AWMLogoProps) {
  // Resolve variant aliases
  const resolvedVariant =
    variant === 'dark' ? 'onDark' :
    variant === 'light' ? 'onLight' :
    variant;

  const logoColor = resolvedVariant === 'onDark' ? '#ffffff' : '#12331c';
  const taglineColor = resolvedVariant === 'onDark' ? 'rgba(255,255,255,0.6)' : '#224b2d';

  const logoWidth = width ?? (size ? SIZE_MAP[size] : SIZE_MAP.md);
  // viewBox is 520 × 135, so height = width × (135/520)
  const logoHeight = Math.round(logoWidth * (135 / 520));

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <svg
        viewBox="0 0 520 135"
        width={logoWidth}
        height={logoHeight}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── A ─────────────────────────────────────────────────────────── */}
        {/* Two thick diagonal strokes meeting at apex — no crossbar */}
        <path
          d="M 13,127 L 65,8 L 117,127"
          stroke={logoColor}
          strokeWidth="22"
          strokeLinejoin="miter"
          strokeMiterlimit="20"
          strokeLinecap="butt"
        />
        {/* Green rhombus accent on the lower portion of the A's left leg */}
        <polygon
          points="26,73 48,95 26,117 4,95"
          fill="#45ac41"
        />

        {/* ── W ─────────────────────────────────────────────────────────── */}
        {/* Outer peaks taller than center peak — angular, no curves */}
        <path
          d="M 143,8 L 170,127 L 212,46 L 254,127 L 310,8"
          stroke={logoColor}
          strokeWidth="22"
          strokeLinejoin="miter"
          strokeMiterlimit="20"
          strokeLinecap="butt"
        />

        {/* ── M ─────────────────────────────────────────────────────────── */}
        {/* Nearly-vertical outer strokes + inner V valley */}
        <path
          d="M 340,127 L 350,8 L 415,73 L 480,8 L 490,127"
          stroke={logoColor}
          strokeWidth="22"
          strokeLinejoin="miter"
          strokeMiterlimit="20"
          strokeLinecap="butt"
        />
      </svg>

      {showTagline && (
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            fontSize: `${Math.max(9, logoWidth * 0.06)}px`,
            color: taglineColor,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginTop: `${logoWidth * 0.05}px`,
            whiteSpace: 'nowrap',
          }}
        >
          Global Wealth Management
        </p>
      )}
    </div>
  );
}
