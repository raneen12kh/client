import { openWhatsApp } from '../services/contactService';
import { prices } from '../data/siteData';

function Pricing() {
  return (
    <section className="py-[80px] px-[24px] bg-background" id="pricing">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[Assistant] text-[28px] md:text-[32px] font-bold text-primary mb-4">
            חבילות שירות ומחירים
          </h2>
          <p className="text-on-surface-variant">מחירים שקופים, ללא אותיות קטנות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {prices.map((p) =>
            p.featured ? (
              <div
                key={p.name}
                className="bg-primary p-10 rounded-[24px] shadow-2xl border-4 border-secondary-container relative scale-105 z-10 text-white"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container px-6 py-1 rounded-full font-bold text-[12px]">
                  {p.badge}
                </div>
                <h3 className="font-[Assistant] text-[24px] font-semibold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-[32px] font-bold">₪{p.price}</span>
                  <span className="text-[12px] opacity-80">{p.unit}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-secondary-container"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-full font-bold shadow-lg hover:brightness-110 transition-all"
                  onClick={() => openWhatsApp(`שלום, אני מעוניין/ת ב-${p.name}`)}
                >
                  {p.cta}
                </button>
              </div>
            ) : (
              <div
                key={p.name}
                className="bg-white p-8 rounded-[20px] shadow-sm border border-outline-variant/30"
              >
                <h3 className="font-[Assistant] text-[24px] font-semibold text-primary mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-[32px] font-bold">₪{p.price}</span>
                  <span className="text-[12px] text-on-surface-variant">{p.unit}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[16px]">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="w-full border border-secondary text-secondary py-3 rounded-full font-bold hover:bg-secondary/5 transition-all"
                  onClick={() => openWhatsApp(`שלום, אני מעוניין/ת ב-${p.name}`)}
                >
                  {p.cta}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
