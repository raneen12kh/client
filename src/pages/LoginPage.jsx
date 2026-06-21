import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  login,
  forgotPassword,
  resetPassword,
  saveSession,
} from '../services/authService';

function Field({ id, label, type = 'text', value, onChange, placeholder, autoComplete, minLength }) {
  const isLtr = type === 'email' || type === 'password';

  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-[14px] font-semibold text-primary mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        required
        minLength={minLength}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        dir={isLtr ? 'ltr' : 'rtl'}
        className="w-full rounded-xl border border-outline-variant bg-white px-4 py-3 text-[15px] text-on-surface outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
      />
    </div>
  );
}

function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get('token');

  const [view, setView] = useState(resetToken ? 'reset' : 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const titles = {
    login: { icon: 'badge', title: 'כניסת צוות', sub: 'אזור זה מיועד לאנשי צוות בלבד' },
    forgot: { icon: 'lock_reset', title: 'שכחתי סיסמה', sub: 'הזינו את האימייל ונשלח הוראות לאיפוס' },
    reset: { icon: 'password', title: 'סיסמה חדשה', sub: 'בחרו סיסמה חדשה לחשבון שלכם' },
  };

  const { icon, title, sub } = titles[view];

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(email, password);
      saveSession(data);
      navigate('/staff');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgot(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const data = await forgotPassword(email);
      setSuccess(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleReset(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (newPassword !== confirmPassword) {
      setError('הסיסמאות אינן תואמות');
      return;
    }
    setLoading(true);
    try {
      const data = await resetPassword(resetToken, newPassword);
      setSuccess(data.message);
      setTimeout(() => {
        setView('login');
        navigate('/login', { replace: true });
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function switchView(next) {
    setView(next);
    setError('');
    setSuccess('');
  }

  return (
    <div className="min-h-screen hero-gradient flex flex-col" dir="rtl" lang="he">
      {/* Header */}
      <header className="w-full border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-secondary-container text-[28px]">ac_unit</span>
            <span className="font-[Assistant] text-[20px] font-bold">קריר בלי הפסקה</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[14px] text-white/80 hover:text-white transition-colors"
          >
            חזרה לאתר
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </Link>
        </div>
      </header>

      {/* Form card */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-[420px]">
          <div className="bg-white rounded-[24px] shadow-2xl overflow-hidden">
            {/* Card header */}
            <div className="bg-surface-container-low px-8 pt-8 pb-6 text-center border-b border-outline-variant/30">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[26px]">{icon}</span>
              </div>
              <h1 className="font-[Assistant] text-[24px] font-bold text-primary">{title}</h1>
              <p className="text-[13px] text-on-surface-variant mt-1">{sub}</p>
            </div>

            {/* Card body */}
            <div className="px-8 py-7">
              {error && (
                <div className="mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-[13px]">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-5 rounded-xl bg-green-50 border border-green-200 text-green-800 px-4 py-3 text-[13px]">
                  {success}
                </div>
              )}

              {view === 'login' && (
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                  <Field
                    id="email"
                    label="אימייל"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div>
                    <label htmlFor="password" className="block text-[14px] font-semibold text-primary mb-2">
                      סיסמה
                    </label>
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      dir="ltr"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="הזינו סיסמה"
                      className="w-full rounded-xl border border-outline-variant bg-white px-4 py-3 text-[15px] text-on-surface outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                    />
                    <button
                      type="button"
                      onClick={() => switchView('forgot')}
                      className="mt-2 text-[13px] text-secondary font-medium hover:underline w-full text-start"
                    >
                      שכחתי סיסמה?
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-1 bg-secondary text-white py-3 rounded-full text-[15px] font-bold shadow-md hover:bg-primary transition-all disabled:opacity-60"
                  >
                    {loading ? 'מתחבר...' : 'התחברות'}
                  </button>
                </form>
              )}

              {view === 'forgot' && (
                <form onSubmit={handleForgot} className="flex flex-col gap-5">
                  <Field
                    id="forgot-email"
                    label="אימייל"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-white py-3 rounded-full text-[15px] font-bold shadow-md hover:bg-primary transition-all disabled:opacity-60"
                  >
                    {loading ? 'שולח...' : 'שליחת בקשת איפוס'}
                  </button>
                  <button
                    type="button"
                    onClick={() => switchView('login')}
                    className="w-full text-[13px] text-on-surface-variant hover:text-primary transition-colors py-1"
                  >
                    חזרה להתחברות
                  </button>
                </form>
              )}

              {view === 'reset' && (
                <form onSubmit={handleReset} className="flex flex-col gap-5">
                  <Field
                    id="new-password"
                    label="סיסמה חדשה"
                    type="password"
                    autoComplete="new-password"
                    placeholder="לפחות 6 תווים"
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Field
                    id="confirm-password"
                    label="אימות סיסמה"
                    type="password"
                    autoComplete="new-password"
                    placeholder="הקלידו שוב"
                    minLength={6}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-white py-3 rounded-full text-[15px] font-bold shadow-md hover:bg-primary transition-all disabled:opacity-60"
                  >
                    {loading ? 'מעדכן...' : 'עדכון סיסמה'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
