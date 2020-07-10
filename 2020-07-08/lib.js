export const calculateRequiredFuel = mass => Math.floor(mass / 3) - 2;

export const processInput = (str) => {
  const lines = str.trim().split('\n');
  let sum = 0;

  lines.forEach((line) => {
    const num = parseInt(line, 10);
    const fuel = calculateRequiredFuel(num);
    sum += fuel;
  });

  return sum;
};
