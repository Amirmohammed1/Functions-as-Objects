const findWaldo = function(names, found) {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(index);
    }
  });
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// const actionWhenFound = function() {
//   console.log("Found him at index ${index}!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
