// Problem 3 : Trees and something like free ski

// AdventOfCode - Day 3

//     You are given the following input:

//     ..##.......
//     #...#...#..
//     .#....#..#.
//     ..#.#...#.#
//     .#...##..#.
//     ..#.##.....
//     .#.#.#....#
//     .#........#
//     #.##...#...
//     #...##....#
//     .#..#...#.#

//     It wraps over and over again

//     ..##.........##.......
//     #...#...#..#...#...#..
//     .#....#..#..#....#..#.
//     ..#.#...#.#..#.#...#.#
//     .#...##..#..#...##..#.
//     ..#.##.......#.##..... ---- > repeats for ever!
//     .#.#.#....#.#.#.#....#
//     .#........#.#........#
//     #.##...#...#.##...#...
//     #...##....##...##....#
//     .#..#...#.#.#..#...#.#

//     We need to travel 3 right and 1 down and count how many trees we hit.

// # = tree
// . = snow


// Example input

// ..##.......
// #...#...#..
// .#....#..#.
// ..#.#...#.#
// .#...##..#.
// ..#.##.....
// .#.#.#....#
// .#........#
// #.##...#...
// #...##....#
// .#..#...#.#

const getProblemThreeInput = () => {
    return `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
}

enum Thing {
    Tree,
    Snow,
}

// console.log(getProblemThreeInput())

const things = getProblemThreeInput().
    split("\n").
    map(x => x.split("").
    map(x => x === "." ? Thing.Snow : Thing.Tree))//.map(x => x === "." ? Thing.Snow : Thing.Tree)

const colLen = things[0].length
let treeCount = 0;

things.forEach((thingRow, i) => {
    if(thingRow[i * 3 % colLen] === Thing.Tree) {
        treeCount++
    }
})

console.log("TreeCount", treeCount)