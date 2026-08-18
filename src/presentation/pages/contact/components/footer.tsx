const Barcode = () => (
  <svg viewBox="0 0 120 30" className="h-6 w-24">
    <rect x="0" y="0" width="2" height="30" fill="currentColor" />
    <rect x="4" y="0" width="1" height="30" fill="currentColor" />
    <rect x="7" y="0" width="3" height="30" fill="currentColor" />
    <rect x="12" y="0" width="1" height="30" fill="currentColor" />
    <rect x="15" y="0" width="2" height="30" fill="currentColor" />
    <rect x="19" y="0" width="1" height="30" fill="currentColor" />
    <rect x="22" y="0" width="3" height="30" fill="currentColor" />
    <rect x="27" y="0" width="1" height="30" fill="currentColor" />
    <rect x="30" y="0" width="2" height="30" fill="currentColor" />
    <rect x="34" y="0" width="1" height="30" fill="currentColor" />
    <rect x="37" y="0" width="3" height="30" fill="currentColor" />
    <rect x="42" y="0" width="2" height="30" fill="currentColor" />
    <rect x="46" y="0" width="1" height="30" fill="currentColor" />
    <rect x="49" y="0" width="2" height="30" fill="currentColor" />
    <rect x="53" y="0" width="3" height="30" fill="currentColor" />
    <rect x="58" y="0" width="1" height="30" fill="currentColor" />
    <rect x="61" y="0" width="2" height="30" fill="currentColor" />
    <rect x="65" y="0" width="1" height="30" fill="currentColor" />
    <rect x="68" y="0" width="3" height="30" fill="currentColor" />
    <rect x="73" y="0" width="2" height="30" fill="currentColor" />
    <rect x="77" y="0" width="1" height="30" fill="currentColor" />
    <rect x="80" y="0" width="2" height="30" fill="currentColor" />
    <rect x="84" y="0" width="3" height="30" fill="currentColor" />
    <rect x="89" y="0" width="1" height="30" fill="currentColor" />
    <rect x="92" y="0" width="2" height="30" fill="currentColor" />
    <rect x="96" y="0" width="1" height="30" fill="currentColor" />
    <rect x="99" y="0" width="3" height="30" fill="currentColor" />
    <rect x="104" y="0" width="2" height="30" fill="currentColor" />
    <rect x="108" y="0" width="1" height="30" fill="currentColor" />
    <rect x="111" y="0" width="2" height="30" fill="currentColor" />
    <rect x="115" y="0" width="3" height="30" fill="currentColor" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground py-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-foreground">
          <Barcode />
          <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
            #001-2026
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg font-black uppercase">
            The End
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
            Fabriciomdec — Portfólio
          </span>
        </div>
      </div>
    </footer>
  );
};
