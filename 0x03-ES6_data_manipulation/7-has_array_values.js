export default function(set, array) {
  return array.every((val) => set.has(val));
}
