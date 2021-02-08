export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getArrayRandomElement(arr) {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}