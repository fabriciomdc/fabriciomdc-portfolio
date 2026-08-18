import { ArrowLeft, Download } from "lucide-react"
import cvFile from "@/presentation/assets/cv/Fabricio-cv.pdf"

interface CVPreviewProps {
  onBack?: () => void
}

export const CVPreview = ({ onBack }: CVPreviewProps) => {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <div className="mx-auto w-[95vw] lg:w-[85vw] border-x-2 border-foreground">
        <div className="flex items-center justify-between border-b-2 border-foreground p-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              onBack?.()
            }}
            className="group inline-flex items-center gap-2 border-2 border-foreground bg-card px-4 py-2 shadow-[3px_3px_0_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
              Voltar
            </span>
          </a>

          <a
            href={cvFile}
            download="Fabricio-Menezes-CV.pdf"
            className="group inline-flex items-center gap-2 border-2 border-foreground bg-violet px-4 py-2 text-primary-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <Download className="h-4 w-4" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
              Baixar PDF
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center p-4" style={{ height: "calc(100vh - 72px)" }}>
          <iframe
            src={cvFile}
            className="h-full w-full border-2 border-foreground shadow-[6px_6px_0_0_var(--foreground)]"
            title="Curriculo - Fabricio Menezes"
          />
        </div>
      </div>
    </div>
  )
}
