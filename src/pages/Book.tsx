import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

export default function Book() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const refItem = searchParams.get("ref") ?? "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [placement, setPlacement] = useState("");
  const [budget, setBudget] = useState("");
  const [references, setReferences] = useState(
    refItem ? `Wishlist item: ${refItem}\n\n` : ""
  );
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    document.title = t("book.pageTitle");
  }, [t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, style, size, placement, budget, references }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "bg-abyss border border-border px-4 py-3.5 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200";

  const labelClass =
    "font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary";

  return (
    <>
      <Header />

      <main className="min-h-screen bg-void pt-28 pb-0">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-border">
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4">
            {t("book.eyebrow")}
          </p>
          <h1
            className="font-display font-black text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            {t("book.headline")}
          </h1>
          <p className="font-body font-light text-ink-secondary leading-relaxed max-w-lg">
            {t("book.desc")}
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
          {status === "success" ? (
            <div className="py-24 text-center">
              <p className="font-display font-bold text-white text-2xl mb-4">
                {t("book.form.success")}
              </p>
              <p className="font-body font-light text-ink-tertiary">
                {t("book.form.note")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>{t("book.form.name")}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>{t("book.form.email")}</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>{t("book.form.style")}</label>
                <input
                  type="text"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  placeholder={t("book.form.stylePlaceholder")}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>{t("book.form.size")}</label>
                  <input
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder={t("book.form.sizePlaceholder")}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>{t("book.form.placement")}</label>
                  <input
                    type="text"
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    placeholder={t("book.form.placementPlaceholder")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>{t("book.form.budget")}</label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder={t("book.form.budgetPlaceholder")}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>{t("book.form.references")}</label>
                <textarea
                  required
                  rows={6}
                  value={references}
                  onChange={(e) => setReferences(e.target.value)}
                  placeholder={t("book.form.referencesPlaceholder")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="font-body text-sm text-red-400">{t("book.form.error")}</p>
              )}

              <div className="w-full h-px bg-border" />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-phosphor text-void font-label font-medium text-xs tracking-[0.18em] uppercase py-4 hover:bg-glow transition-colors duration-200 disabled:opacity-50"
              >
                {status === "sending" ? t("book.form.submitting") : t("book.form.submit")}
              </button>

              <p className="font-body text-xs text-ink-tertiary text-center">
                {t("book.form.note")}
              </p>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
