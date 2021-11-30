export default function cleanSet(set, startString) {
  let strList = [];
  for (const str of set) {
    if (startString && str.startsWith(startString)) {
      strList.push(str.replace(startString, ''));
    }
  }

  return strList.length ? strList.join('-') : '';
}
