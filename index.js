const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten () {
  kittens.unshift(name);
  return kittens;
}