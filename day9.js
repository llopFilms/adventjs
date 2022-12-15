/* A company that manufactures Christmas lights has asked us to help them.

They have led strips that are like an Array. Each position is a led and can be on (1) or off (0).

Every 7 seconds, the leds change state in this way:

    If the led is off, it turns on if the led on its left (index - 1) was on before.
    If the led is on, it remains on.

They asked us for a program that tells us how many seconds it takes for all the leds to turn on. The seconds are expressed as an integer. For example:

const leds = [0, 1, 1, 0, 1]
countTime(leds) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

Keep in mind

    The array will always have at least one led on.
    The array can have any length.
    If all the leds are on, the time is 0.
 */

function countTime2(leds) {
  let time = 0;
  let i = 0;
  let copy = [...leds];

  while (leds.every((led) => led === 1) == false) {
    for (let i = 0; i < leds.length; i++) {
      if (i === 0 && leds[leds.length - 1] === 1) copy[i] = 1;
      if (leds[i] === 0 && leds[i - 1] === 1) {
        copy[i] = 1;
        console.log(copy, i);
      }
    }
    time += 7;
    leds = [...copy];
    console.log(leds.every((led) => led === 1));
  }

  console.log(time);
  return time;
}

console.log(countTime2([0, 0, 1, 0, 0]));

function countTime3(leds) {
  let i = 0;
  let result = 0;
  const copy = [...leds];
  while (!leds.every((n) => n === 1)) {
    if (leds.at(i - 1) === 1 && leds.at(i) === 0) copy[i] = 1;
    if (i === leds.length - 1) {
      result += 1;
      leds = [...copy];
    }
    i = (i + 1) % leds.length;
  }
  return result * 7;
}
console.log(countTime3([0, 0, 1, 0, 0]));

function countTime4(leds) {
  let time = 0;
  let i = 0;
  let copy = [];

  while (!leds.every((led) => led === 1)) {
    copy = leds.map((led, i, leds) => {
      console.log(i);
      if (i === 0 && leds[leds.length - 1] === 1) led = 1;
      console.log(led);
      if (led === 0 && leds[i - 1] === 1) led = 1;
      console.log(led);
      return led;
    });
    console.log(copy);
    time += 7;
    leds = [...copy];
    console.log(leds.every((led) => led === 1));
  }

  console.log(time);
  return time;
}

console.log(countTime4([0, 0, 1, 0, 0]));

function countTime5(leds) {
  console.log(leds.join("").repeat(2).split("1").sort().pop().length * 7);
  return leds.join("").repeat(2).split("1").sort().pop().length * 7;
}
console.log(countTime5([0, 0, 1, 0, 0]));

function countTime(leds) {
  return leds.join("").repeat(2).split("1").sort().at(-1).length * 7;
}
console.log(countTime([0, 0, 0, 1]));
