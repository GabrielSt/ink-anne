import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { giftTiers } from "../data/giftTiers";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

export default function GiftCard() {
  const { t, i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [gifterName, setGifterName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    document.title = t("gift.pageTitle");
  }, [t]);

  const effectiveAmount = selectedAmount ?? (Number(customAmount) || 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          amount: effectiveAmount,
          gifterName,
          recipientName,
          message,
          email,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const steps = [
    t("gift.step1"),
    t("gift.step2"),
    t("gift.step3"),
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-void pt-28 pb-0">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 border-b border-border">
          <p className="font-label font-medium text-xs tracking-[0.28em] uppercase text-phosphor mb-4">
            {t("gift.eyebrow")}
          </p>
          <h1
            className="font-display font-black text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            {t("gift.headline")}
          </h1>
          <p className="font-body font-light text-ink-secondary leading-relaxed max-w-lg">
            {t("gift.desc")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: How it works + tiers */}
            <div>
              {/* How it works */}
              <h2 className="font-display font-bold text-white text-xl mb-8">
                {t("gift.howTitle")}
              </h2>
              <div className="flex flex-col gap-6 mb-14">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <span className="font-label font-medium text-phosphor text-sm shrink-0 w-6 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <div className="w-px h-6 bg-phosphor/30 -mt-1 ml-[-1px] hidden" />
                      <p className="font-body text-ink-secondary text-sm leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Value tiers */}
              <h2 className="font-display font-bold text-white text-xl mb-6">
                {t("gift.form.amount")}
              </h2>
              <div className="grid grid-cols-1 gap-px bg-border mb-4">
                {giftTiers.map((tier) => {
                  const desc = i18n.language === "pt" ? tier.descPt : tier.descEn;
                  const isSelected = selectedAmount === tier.amount;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => {
                        setSelectedAmount(tier.amount);
                        setCustomAmount("");
                      }}
                      className={[
                        "flex items-center gap-6 p-5 text-left transition-colors duration-200",
                        isSelected
                          ? "bg-phosphor/10 border-l-2 border-phosphor"
                          : "bg-void hover:bg-abyss border-l-2 border-transparent",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "font-display font-bold text-xl shrink-0",
                          isSelected ? "text-phosphor" : "text-ink-secondary",
                        ].join(" ")}
                      >
                        €{tier.amount}
                      </span>
                      <span className="font-body font-light text-ink-tertiary text-sm leading-relaxed">
                        {desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Custom amount */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedAmount(null)}
                  className={[
                    "font-label text-[11px] tracking-[0.15em] uppercase px-3 py-2 transition-all duration-200 shrink-0",
                    selectedAmount === null
                      ? "bg-phosphor text-void"
                      : "border border-border text-ink-tertiary hover:text-ink-primary",
                  ].join(" ")}
                >
                  {t("gift.customAmount")}
                </button>
                {selectedAmount === null && (
                  <div className="flex items-center gap-2 border border-border flex-1">
                    <span className="font-label text-ink-tertiary pl-3">€</span>
                    <input
                      type="number"
                      min="50"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="bg-transparent py-2 pr-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none w-full"
                      placeholder="150"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <h2 className="font-display font-bold text-white text-xl mb-8">
                {status === "success" ? "" : t("gift.form.gifterName")}
              </h2>

              {status === "success" ? (
                <div className="py-16 text-center">
                  <p className="font-body text-ink-secondary leading-relaxed text-lg mb-2">
                    {t("gift.form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                      {t("gift.form.gifterName")}
                    </label>
                    <input
                      type="text"
                      required
                      value={gifterName}
                      onChange={(e) => setGifterName(e.target.value)}
                      className="bg-abyss border border-border px-4 py-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                      {t("gift.form.recipientName")}
                    </label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="bg-abyss border border-border px-4 py-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                      {t("gift.form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-abyss border border-border px-4 py-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label text-[11px] tracking-[0.2em] uppercase text-ink-tertiary">
                      {t("gift.form.message")}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-abyss border border-border px-4 py-3 font-body text-sm text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-phosphor transition-colors duration-200 resize-none"
                    />
                  </div>

                  {effectiveAmount > 0 && (
                    <div className="flex items-center justify-between py-4 border-t border-border">
                      <span className="font-label text-xs tracking-widest text-ink-tertiary uppercase">
                        Total
                      </span>
                      <span className="font-display font-bold text-2xl text-phosphor">
                        €{effectiveAmount}
                      </span>
                    </div>
                  )}

                  {status === "error" && (
                    <p className="font-body text-sm text-red-400">{t("gift.form.error")}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending" || effectiveAmount <= 0}
                    className="bg-phosphor text-void font-label font-medium text-xs tracking-[0.18em] uppercase py-4 hover:bg-glow transition-colors duration-200 disabled:opacity-50"
                  >
                    {status === "sending" ? t("gift.form.submitting") : t("gift.form.submit")}
                  </button>

                  <p className="font-body text-xs text-ink-tertiary text-center leading-relaxed">
                    {t("gift.form.note")}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
