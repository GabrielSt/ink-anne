import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemLabel: string;
  itemName: string;
  translationNs: "flash" | "pokedex";
  isFinished?: boolean;
}

export default function ReservationModal({
  isOpen,
  onClose,
  itemLabel,
  itemName,
  isFinished = false,
}: ReservationModalProps) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const ns = "flash"; // both flash and pokedex share the same modal structure keys

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, date, item: itemName }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-void/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-abyss border border-border w-full max-w-md p-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ink-tertiary hover:text-ink-primary transition-colors"
          aria-label="Close"
        >
          <X size={16} strokeWidth={1.5} />
        </button>

        <h2 className="font-display font-bold text-white text-xl mb-2">
          {t(`${ns}.modal.title`)}
        </h2>

        <p className="font-label text-xs tracking-[0.15em] text-phosphor mb-8">
          {itemLabel}: <span className="text-ink-primary">{itemName}</span>
        </p>

        {isFinished ? (
          <div className="py-6 text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-48 h-48 bg-void border-2 border-dashed border-phosphor/30 flex items-center justify-center rounded">
                <span className="font-display text-6xl text-phosphor/30">🎨</span>
              </div>
            </div>
            <p className="font-body text-ink-secondary leading-relaxed mb-4">
              Já foi realizada uma tatuagem deste Pokémon! Se gostou e quer uma adaptação personalizada, entre em contacto para discutir!
            </p>
            <p className="font-label text-[11px] tracking-[0.15em] uppercase text-phosphor">
              -30% em adaptações personalizadas
            </p>
          </div>
        ) : status === "success" ? (
          <div className="py-8 text-center">
            <p className="font-body text-ink-secondary leading-relaxed mb-2">
              {t(`${ns}.modal.success`)}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                {t(`${ns}.modal.name`)}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-void border border-border px-4 py-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200"
                placeholder="Anne"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                {t(`${ns}.modal.email`)}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-void border border-border px-4 py-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200"
                placeholder="tu@email.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                {t(`${ns}.modal.date`)}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-void border border-border px-4 py-3 font-body text-sm text-ink-primary focus:outline-none focus:border-phosphor transition-colors duration-200"
              />
            </div>

            {status === "error" && (
              <p className="font-body text-sm text-red-400">{t(`${ns}.modal.error`)}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 bg-phosphor text-void font-label font-medium text-xs tracking-[0.18em] uppercase py-3.5 hover:bg-glow transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? t(`${ns}.modal.submitting`) : t(`${ns}.modal.submit`)}
            </button>

            <p className="font-body text-xs text-ink-tertiary text-center">
              {t(`${ns}.modal.note`)}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
