const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kitten, name];
}

function prependKitten(name) {
  return [name, ...kitten]
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  let newArray = [...kitten]
  return newArray.slice(1);
}