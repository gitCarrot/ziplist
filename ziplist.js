const a1 = ['a', 'b', 'c'];
const a2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const container = [];
  for (let i = 0; i < arr1.length; i++) {
    container.push(arr1[i]);
    container.push(arr2[i]);
  }
  return container;
}

console.log(zipList(a1, a2));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2), 1);
}

console.log(zipListTheSimpleWay(a1, a2));
