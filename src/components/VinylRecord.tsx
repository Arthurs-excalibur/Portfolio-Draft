'use client';

interface Props {
  size?: number;
  spin?: boolean;
}

export default function VinylRecord({ size = 120, spin = false }: Props) {
  return (
    <div
      style={{ width: size, height: size }}
      className={spin ? 'vinyl-spin' : ''}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer record */}
        <circle cx="60" cy="60" r="58" fill="#1a1a1a" />

        {/* Groove rings */}
        {[50, 44, 38, 32, 26].map((r, i) => (
          <circle key={i} cx="60" cy="60" r={r} stroke="#2a2a2a" strokeWidth="1.5" />
        ))}

        {/* Label area */}
        <circle cx="60" cy="60" r="18" fill="#0A0A0A" />
        <circle cx="60" cy="60" r="18" stroke="var(--sunflower)" strokeWidth="1" opacity="0.6" />

        {/* Label decoration */}
        <text x="60" y="57" textAnchor="middle" fontFamily="serif" fontSize="6" fill="var(--sunflower)" opacity="0.9">
          NUJABES
        </text>
        <text x="60" y="65" textAnchor="middle" fontFamily="serif" fontSize="4" fill="#7A8B8B">
          御 · vol.1
        </text>

        {/* Center hole */}
        <circle cx="60" cy="60" r="4" fill="#0A0A0A" />
        <circle cx="60" cy="60" r="2" fill="#111" stroke="#333" strokeWidth="0.5" />

        {/* Outer highlight */}
        <circle cx="60" cy="60" r="58" stroke="#2a2a2a" strokeWidth="1.5" />
        <path d="M 20 20 A 57 57 0 0 1 80 10" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
