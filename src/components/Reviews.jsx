import { reviews } from '../data/siteData';

function StarRow() {
  return (
    <div className="flex text-yellow-500 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          star
        </span>
      ))}
    </div>
  );
}

function Reviews() {
  return (
    <section className="py-[80px] bg-white" id="reviews">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <h2 className="font-[Assistant] text-[32px] font-bold text-center text-primary mb-16">
          מה הלקוחות שלנו אומרים?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <article key={r.name} className="bg-surface-container-low p-8 rounded-3xl relative">
              <div className="absolute -top-4 right-8 bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined">format_quote</span>
              </div>
              <StarRow />
              <p className="text-[16px] text-on-surface-variant mb-6 leading-relaxed">&quot;{r.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-outline-variant rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={r.avatar} alt={r.name} />
                </div>
                <div>
                  <p className="font-bold text-primary">{r.name}</p>
                  <p className="text-[12px] text-on-surface-variant">{r.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
