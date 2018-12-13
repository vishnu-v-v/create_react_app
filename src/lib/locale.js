import Cookies from 'js-cookie';

export function SetLocale(language) {
  Cookies.set('locale', language);
}

export function GetLocale() {
  return Cookies.get('locale');
}
