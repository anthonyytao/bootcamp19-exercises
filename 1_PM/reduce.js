// complete the implementation of sum and reduce such that reducing an array
// returns the product of its values
// [0,4,3,6,9].fold(sum, 0) === 22

const arr = [0, 1, 2, 3, 4];

const sum = (acc, cur) => {
    return (acc * cur);
};

Array.prototype.reduce = function(fun, init) {
    for (let i = 0; i < this.length; i++) {
        init = fun(init, this[i]);
  }
  return init;
};

const total = arr.reduce(sum, 0);
console.log(total);
