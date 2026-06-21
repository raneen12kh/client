import { trustItems } from '../data/siteData';

function TrustBar() {
  return (
    <section className="py-12 bg-white border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-[24px] overflow-x-auto">
        <div className="flex flex-row gap-8 justify-between items-center min-w-[800px]">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-4 text-on-surface-variant font-bold whitespace-nowrap">
              <span className="material-symbols-outlined text-secondary">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
