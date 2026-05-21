interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: 'lime' | 'gold' | 'fire' | 'purple' | 'white';
}

const colors = {
  lime:   'bg-[rgba(51,255,0,0.12)] text-[#33FF00] border border-[rgba(51,255,0,0.25)]',
  gold:   'bg-[rgba(252,211,77,0.12)] text-[#FCD34D] border border-[rgba(252,211,77,0.25)]',
  fire:   'bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.25)]',
  purple: 'bg-[rgba(109,40,217,0.12)] text-[#A78BFA] border border-[rgba(109,40,217,0.25)]',
  white:  'bg-white/10 text-white border border-white/20',
};

export default function SectionBadge({ children, className = '', color = 'lime' }: SectionBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
        text-xs font-semibold tracking-widest uppercase
        ${colors[color]} ${className}
      `}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
}
