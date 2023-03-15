// Problem 2 : Fissures

// No festivities

//     You are given lines ((x1, y1) -> (x2, y2))
//     Only consider horizontal and vertical lines
//     We wont solve the actual problem as its a bit verbose!


// Example input

// 0,9 -> 5,9
// 8,0 -> 0,8
// 9,4 -> 3,4
// 2,2 -> 2,1
// 7,0 -> 7,4
// 6,4 -> 2,0
// 0,9 -> 2,9
// 3,4 -> 1,4
// 0,0 -> 8,8
// 5,5 -> 8,2



const getProblemTwoInput = (): string => {
    return `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
};

type Point = {
    X: number,
    Y: number,
}

type Line = {
    p1: Point,
    p2: Point,
}

const isHorizantalOrVertical = (line: Line) => {
    return line.p1.X == line.p2.X || line.p1.Y == line.p2.Y;
}

const parsePoint = (p: string): Point => {
    const [x, y] = p.split(",")
    return {
        X: +x,
        Y: +y
    }
}

const parseLineP2 = (line: string): Line => {
    const [p1, p2] = line.split(" -> ");
    return {
        p1: parsePoint(p1),
        p2: parsePoint(p2),
    }
}



//solution
const problemTwoOutput = getProblemTwoInput().split("\n").map(x => parseLineP2(x)).filter(isHorizantalOrVertical)
console.log(problemTwoOutput)



