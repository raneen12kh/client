import { openWhatsApp, PHONE } from '../services/contactService';

function BottomCTA() {
  return (
    <section className="py-[48px] px-[24px]" id="contact">
      <div className="max-w-[1280px] mx-auto hero-gradient rounded-[40px] px-8 py-10 md:px-12 md:py-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-[Assistant] text-[22px] sm:text-[26px] md:text-[32px] font-bold text-white mb-3 whitespace-nowrap">
            אל תשארו בחום!
          </h2>
          <div className="mb-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-primary-fixed/80 mx-auto leading-tight whitespace-nowrap">
              צוות הטכנאים שלנו מוכן לצאת אליכם עכשיו. שירות אמין, מהיר ומקצועי במרחק לחיצה אחת.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <a
              className="text-[28px] md:text-[40px] font-black text-secondary-container tracking-tight hover:scale-105 transition-transform leading-none"
              href={`tel:${PHONE.replace(/-/g, '')}`}
            >
              {PHONE}
            </a>
            <button
              type="button"
              className="bg-white text-primary px-8 py-3.5 rounded-full font-[Assistant] text-[18px] md:text-[20px] font-semibold flex items-center gap-2 shadow-xl hover:bg-secondary-container hover:text-on-secondary-container transition-all"
              onClick={() => openWhatsApp()}
            >
              <span className="material-symbols-outlined">chat</span>
              דברו איתנו בווטסאפ ←
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomCTA;
