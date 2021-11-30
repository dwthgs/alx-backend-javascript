export default function cleanSet(set, startString) {
  const strList = [];
  for (const str of set) {
    if (startString && str.startsWith(startString)) {
      strList.push(str.slice(startString.length));
    }
  }

  return strList.length ? strList.join('-') : '';
}
