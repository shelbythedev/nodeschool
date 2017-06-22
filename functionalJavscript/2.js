function repeat(operation, num) {
    // SOLUTION GOES HERE
    var count = 1;

    while (count <= num){
      operation();
      count ++;
    }
}

repeat(function(){
}, 4)

// Do not remove the line below
module.exports = repeat
