import { SectionLabel } from "@/presentation/components/ui/decorations";
import { Typography } from "@/presentation/components/ui/typography";

export const AboutIntro = () => {
  return (
    <div className="border-b-2 border-foreground p-12 lg:border-b-0 lg:border-r-2">
      <SectionLabel number="02" label="About Me" />
      <h2 className="font-display max-w-[640px] text-[clamp(2.5rem,5vw,3.75rem)] font-black uppercase leading-[0.95] tracking-[-0.02em]">
        Olá! Meu nome é Fabricio Menezes.
      </h2>
      <Typography variant="body" className="mt-8 max-w-[560px]">
        Sou desenvolvedor de software e fascinado por como a tecnologia
        transforma rotinas, gerando praticidade, eficiência e produtividade na
        vida das pessoas.
      </Typography>
      <Typography variant="body" className="mt-4 max-w-[560px]">
        Trabalho focado no desenvolvimento de aplicações modernas e escaláveis,
        buscando sempre aprimorar minhas práticas de arquitetura, padrões de
        projeto e novas tecnologias.
      </Typography>
      <div className="mt-10 space-y-4">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet">
            Linguagens
          </span>
          <Typography variant="body-sm" className="mt-1">
            TypeScript, JavaScript, Java (Android)
          </Typography>
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet">
            Bancos de Dados
          </span>
          <Typography variant="body-sm" className="mt-1">
            PostgreSQL, MongoDB
          </Typography>
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet">
            Arquitetura & Boas Práticas
          </span>
          <Typography variant="body-sm" className="mt-1">
            Clean Architecture, SOLID, BDD, TDD...
          </Typography>
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet">
            Versionamento & Fluxo
          </span>
          <Typography variant="body-sm" className="mt-1">
            Git (GitHub, GitLab, Bitbucket), Git Flow, Convencional Commits
          </Typography>
        </div>
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-violet">
            Metodologias Ágeis
          </span>
          <Typography variant="body-sm" className="mt-1">
            Scrum, Kanban
          </Typography>
        </div>
      </div>
    </div>
  );
};
