export const HeroIllustration = () => {
  return (
    <div className="relative overflow-hidden border-t-2 border-foreground">
      <div className="absolute inset-42 -rotate-2 border-2 border-foreground bg-card p-2">
        <div className="relative flex h-full items-center justify-center overflow-hidden border-2 border-foreground bg-background">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, color-mix(in srgb, var(--primary) 30%, transparent) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />

          <div className="relative">
            <div className="h-36 w-36 rounded-full border-4 border-foreground overflow-hidden shadow-[4px_4px_0_0_var(--foreground)]">
              <img
                src="https://avatars.githubusercontent.com/u/167791569?v=4&size=144"
                alt="Fabricio Menezes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <span className="font-mono absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.2em] text-violet font-bold">
            github.com/fabriciomdc
          </span>
        </div>
      </div>
    </div>
  );
};
