export function generateRandomNumber(
  min: number = 3,
  max: number = 10,
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
