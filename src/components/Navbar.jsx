import { Link } from 'react-router-dom';
import { openWhatsApp } from '../services/contactService';

function Navbar() {
  return (
    <header className="fixed top-10 left-0 right-0 z-50 px-4 md:px-[48px]">
      <nav className="max-w-[1280px] mx-auto h-20 bg-white/80 backdrop-blur-md rounded-full shadow-sm flex justify-between items-center px-6 md:px-10 border-b border-outline-variant/30">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-3xl">ac_unit</span>
          <span className="font-[Assistant] text-[24px] font-semibold text-primary">קריר בלי הפסקה</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#services">שירותים</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#pricing">מחירון</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#reviews">ביקורות</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="/#contact">צור קשר</a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="inline-flex items-center gap-1 text-on-surface-variant text-[13px] font-medium hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">login</span>
            התחברות
          </Link>
          <button
            type="button"
            className="bg-secondary text-white px-7 py-3 rounded-full text-[15px] font-bold shadow-lg shadow-secondary/30 hover:bg-primary hover:shadow-primary/30 transition-all duration-300 active:scale-95"
            onClick={() => openWhatsApp()}
          >
            דברו איתנו ←
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
