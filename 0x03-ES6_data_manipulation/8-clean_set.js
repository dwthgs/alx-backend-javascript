export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  let strList = '';
  for (const str of set) {
    if (typeof str === 'string' && str.startsWith(startString)) {
      strList += `${str.slice(startString.length)}-`;
    }
  }

  return strList.slice(0, -1);
}
