export const PHONE = '050-593-0941';
export const WHATSAPP = '972505930941';

export function callNow() {
  window.location.href = `tel:${PHONE}`;
}

export function openWhatsApp(message = 'שלום, אני רוצה לקבוע תור לטכנאי מיזוג אוויר') {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
}
