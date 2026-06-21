function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-12 border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-[24px]">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-3xl">ac_unit</span>
            <span className="font-[Assistant] text-[24px] font-semibold text-primary">קריר בלי הפסקה</span>
          </div>
          <div className="flex gap-8 text-[14px] font-medium text-on-surface-variant">
            <a className="hover:text-secondary transition-colors" href="#">תנאי שימוש</a>
            <a className="hover:text-secondary transition-colors" href="#">מדיניות פרטיות</a>
            <a className="hover:text-secondary transition-colors" href="#">רישיון טכנאי</a>
          </div>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 bg-surface-variant rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
              href="#"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined">face_nod</span>
            </a>
            <a
              className="w-10 h-10 bg-surface-variant rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
              href="#"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined">camera</span>
            </a>
          </div>
        </div>
        <div className="text-center text-[12px] text-on-surface-variant border-t border-outline-variant/10 pt-8">
          כל הזכויות שמורות © 2024 קריר בלי הפסקה | פתרונות מיזוג מתקדמים
        </div>
      </div>
    </footer>
  );
}

export default Footer;
