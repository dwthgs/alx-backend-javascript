export default function cleanSet(set, startString) {
  let joinedstr = '';
  for (const str of set) {
    if (startString && str.startsWith(startString)) {
      joinedstr += `${str.replace(startString, '')}-`;
    }
  }

  return joinedstr ? joinedstr.slice(0, -1) : '';
}
