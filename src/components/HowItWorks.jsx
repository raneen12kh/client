import { steps, TECHNICIAN_IMAGE } from '../data/siteData';

function HowItWorks() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-[Assistant] text-[28px] md:text-[32px] font-bold text-primary mb-6">
              איך זה עובד? פשוט ומהיר
            </h2>
            <p className="text-on-surface-variant text-[18px] mb-10 leading-relaxed">
              אנחנו מאמינים בשקיפות מלאה ובשירות ללא הפתעות. הנה הדרך שלנו להבטיח לכם בית קריר.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <span className="text-4xl font-black text-secondary/20">{step.num}</span>
                  <div>
                    <h4 className="font-[Assistant] text-[24px] font-semibold text-primary mb-2">{step.title}</h4>
                    <p className="text-[12px] text-on-surface-variant leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
              <img
                className="w-full h-full object-cover"
                src={TECHNICIAN_IMAGE}
                alt="טכנאי מיזוג אוויר מקצועי בודק מזגן"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl max-w-xs -rotate-3">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-secondary-container" />
                <div>
                  <p className="font-bold text-primary">יוסי כהן</p>
                  <p className="text-[12px] text-on-surface-variant">טכנאי בכיר, 12 שנות ניסיון</p>
                </div>
              </div>
              <p className="italic text-[12px] text-on-surface-variant">
                &quot;אנחנו לא עוזבים את הבית עד שהלקוח מרגיש את השינוי באוויר.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
