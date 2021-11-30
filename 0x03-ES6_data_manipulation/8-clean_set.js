export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const strList = [];
  for (const str of set) {
    if (typeof startString === 'string' && str.startsWith(startString)) {
      strList.push(str.slice(startString.length));
    }
  }

  return strList.join('-');
}
