function EmergencyBanner() {
  return (
    <div className="sticky top-0 z-[100] w-full bg-error text-white py-2 px-4 shadow-md text-center font-bold">
      <div className="flex items-center justify-center gap-2 text-[14px] md:text-[16px]">
        <span className="material-symbols-outlined emergency-pulse">emergency_home</span>
        <span>🚨 שירות חירום 24/7 — מזגן קרס? התקשרו עכשיו:</span>
        <a
          className="underline decoration-white/50 hover:decoration-white transition-all"
          href="tel:0505930941"
        >
          050-593-0941
        </a>
      </div>
    </div>
  );
}

export default EmergencyBanner;
