import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearSession, getStoredUser } from '../services/authService';

function StaffPage() {
  const navigate = useNavigate();
  const user = getStoredUser();

  useEffect(() => {
    if (!getStoredUser()) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  if (!user) return null;

  function handleLogout() {
    clearSession();
    navigate('/login', { replace: true });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="hero-gradient text-white px-4 md:px-[48px] py-6">
        <div className="max-w-[1280px] mx-auto flex flex-row-reverse justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container text-3xl">ac_unit</span>
            <span className="font-[Assistant] text-[22px] font-semibold">לוח בקרה — צוות</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[14px] text-primary-fixed/80 hover:text-white transition-colors">
              חזרה לאתר
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-[14px] bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              התנתקות
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-[24px] py-12">
        <div className="bg-white rounded-[24px] shadow-sm border border-outline-variant/30 p-8 md:p-10">
          <h1 className="font-[Assistant] text-[28px] font-bold text-primary mb-2">
            שלום, {user.name}
          </h1>
          <p className="text-on-surface-variant mb-6">
            התחברת בהצלחה כ{user.role === 'admin' ? 'מנהל/ת' : 'טכנאי/ת'} ({user.email})
          </p>
          <p className="text-[14px] text-on-surface-variant">
            כאן יופיע לוח הבקרה של הצוות — ניהול תורים, לקוחות ועוד.
          </p>
        </div>
      </main>
    </div>
  );
}

export default StaffPage;
