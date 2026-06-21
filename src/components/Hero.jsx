import { openWhatsApp } from '../services/contactService';

function Hero() {
  return (
    <section className="relative pt-44 pb-24 hero-gradient text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[24px] relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8">
          <span className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span className="text-[14px] font-bold">מדורגים #1 בישראל לשנת 2024</span>
        </div>

        <h1 className="font-[Assistant] text-[48px] md:text-[64px] max-w-4xl mx-auto leading-tight mb-6 font-bold tracking-tight">
          הבית שלך קריר תמיד ובלי דאגות
        </h1>

        <p className="text-[18px] text-primary-fixed/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          אנחנו מספקים פתרונות מיזוג אוויר מתקדמים, התקנות מקצועיות ושירותי תיקון מהירים לכל סוגי המזגנים בפריסה ארצית.
        </p>

        <div className="flex flex-wrap justify-center gap-[24px] mb-[80px]">
          <button
            type="button"
            className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-[Assistant] text-[24px] font-semibold shadow-lg hover:shadow-cyan-500/20 transition-all"
            onClick={() => openWhatsApp('שלום, אני רוצה להזמין טכנאי')}
          >
            הזמנת טכנאי עכשיו
          </button>
          <a
            href="#pricing"
            className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-[Assistant] text-[24px] font-semibold hover:bg-white/10 transition-all"
          >
            לצפייה במחירון
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
          <div className="flex flex-col">
            <span className="text-[32px] font-bold text-secondary-container">3,200+</span>
            <span className="text-[12px] opacity-70">התקנות שבוצעו</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[32px] font-bold text-secondary-container">98%</span>
            <span className="text-[12px] opacity-70">לקוחות מרוצים</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[32px] font-bold text-secondary-container">2 שעות</span>
            <span className="text-[12px] opacity-70">זמן הגעה ממוצע</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[32px] font-bold text-secondary-container">15 שנה</span>
            <span className="text-[12px] opacity-70">ניסיון מקצועי</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
