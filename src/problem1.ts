// Problem 1 : Submarine navigation

// Without all the fluff and festive fun of advent of code here is th deets.

//     Your submarine starts at position 0,0 (x position, depth)
//     Parse input to direct your submarine.
//     Multiply your depth * x progression to get an answer

// Example input

// forward 5
// down 5
// forward 8
// up 3
// down 8
// forward 2

// Note

// this means that up 3 is actually -3 from the y axis.

const getInput = (): string => {
  return `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
};

function parseLine(line: string): [number, number] {
  const [dir, a] = line.split(" ");
  const amount = +a;

  switch (dir) {
    case "forward":
      return [amount, 0];
    case "up":
      return [0, -amount];
    case "down":
      return [0, amount];
    default:
      break;
  }

  return [0, 0];
}

const items = getInput()
  .split("\n")
  .map((x) => parseLine(x));

const out = getInput()
  .split("\n")
  .map((x) => parseLine(x))
  .reduce(
    (acc, amount) => {
      acc[0] += amount[0];
      acc[1] += amount[1];
      return acc;
    },
    [0, 0]
  );

const answer = out[0] * out[1];

console.log(`Coordinates: ${out} \nAnswer: ${answer}`);