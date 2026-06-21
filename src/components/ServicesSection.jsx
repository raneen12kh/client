import { services } from '../data/siteData';

function ServicesSection() {
  return (
    <section className="py-[80px] px-[24px] bg-background" id="services">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[Assistant] text-[28px] md:text-[32px] font-bold text-primary mb-4">
            השירותים המקצועיים שלנו
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card bg-white p-8 rounded-[20px] shadow-sm hover:shadow-md group"
            >
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`px-3 py-1 text-[12px] rounded-full font-bold ${s.tagClass}`}>{s.tag}</span>
                <h3 className="font-[Assistant] text-[24px] font-semibold text-primary">{s.title}</h3>
              </div>
              <p className="text-on-surface-variant text-[16px] mb-6 leading-relaxed">{s.text}</p>
              <a className="text-secondary font-bold hover:underline" href="#contact">
                למידע נוסף ←
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
