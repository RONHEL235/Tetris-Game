"use strict";
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

const arenaSweep = () => {
  let rowCount = 1;
  outer: for (let y = arena.length; y > 0; y = y - 1) {
    for (let x = 0; x < arena[y].length; x = x + 1) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }
    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    y = y + 1;
    player.score = player.score + rowCount * 10;
    rowCount = rowCount * 2;
  }
};

const collide = (arena, player) => {
  const m = player.matrix;
  const o = player.pos;
  for (let y = 0; y < m; y = y + 1) {
    for (let x = 0; x < m[y].length; x = x + 1) {
      if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
        return true;
      }
    }
  }
  return false;
};

const createMatrix = (w, h) => {
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
};
