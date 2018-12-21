import Cookies from 'js-cookie';

export function SetContrast(contrast) {
  Cookies.set('contrast', contrast);
}

export function GetContrast() {
  return Cookies.get('contrast');
}
