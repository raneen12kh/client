import { brands } from '../data/siteData';

function Brands() {
  return (
    <section className="py-12 bg-surface-container-low border-y border-outline-variant/30 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <p className="text-center text-on-surface-variant font-bold mb-8 uppercase tracking-widest text-[12px]">
          מתמחים בכל המותגים המובילים
        </p>
        <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          {brands.map((b) => (
            <span key={b} className="px-8 py-3 bg-white rounded-full font-black text-[24px]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
