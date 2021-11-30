export default function cleanSet(set, startString) {
  if (!startString || typeof str !== 'string') return '';

  const strList = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      strList.push(str.slice(startString.length));
    }
  }

  return strList.join('-');
}
