export default function updateUniqueItems(map) {
  return map.forEach((val, key) => {
    if (val === 1) map.set(key, 100);
  });
}
